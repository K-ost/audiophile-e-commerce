import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { nanoid } from 'nanoid'
import { OrderType, ProductType } from '../types'

interface AppState {
  orders: OrderType[]
  addOrder: (count: number, order: ProductType) => void
  removeAllOrders: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        
        // addOrder
        addOrder: (count, order) => set((state) => {

          // newOrder
          const newOrder: OrderType = {
            id: nanoid(),
            count,
            image: order.image,
            name: order.name,
            price: order.price,
            slug: order.slug
          }
          
          // if order exists
          const existed = state.orders.some(el => el.slug === order.slug)
          const found = state.orders.find(el => el.slug === order.slug)
          
          if (existed) {
            found!.count += count
            return { orders: state.orders }
          }
          
          return { orders: [ ...state.orders, newOrder ] }
        }),

        // removeAllOrders
        removeAllOrders: () => set(() => ({ orders: [] })),

      }),
      {
        name: 'orders',
        partialize: (state) => ({
          orders: state.orders
        })
      }
    )
  )
)