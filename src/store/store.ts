import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ProductType } from '../types'

interface AppState {
  orders: any,
  addOrder: (count: number, order: ProductType) => void
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        
        // addOrder
        addOrder: (count, order) => set((state) => {
          return state.orders = [ 1, ...state.orders ]
        })
      }),
      {
        name: 'orders',
        partialize: (state) => ({
          theme: state.orders
        })
      }
    )
  )
)