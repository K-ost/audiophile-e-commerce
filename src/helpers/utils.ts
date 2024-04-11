import { OrderType } from "../types"

// Get image
export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href
}

// getOrdersCount
export const getOrdersCount = (orders: OrderType[]): number => {
  return orders.reduce((acum, el) => acum += el.count, 0)
}

// getOrderTotal
export const getOrderTotal = (orders: OrderType[]): string => {
  const output: number = orders.reduce((acum, el) => acum += el.count * el.price, 0)
  return output.toLocaleString('en-US')
}
