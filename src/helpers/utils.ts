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
export const getOrderTotal = (orders: OrderType[]): number => {
  const output: number = orders.reduce((acum, el) => acum += el.count * el.price, 0)
  return output
}

// convertPrice
export const convertPrice = (num: number): string => {
  return num.toLocaleString('en-US')
}

// formFieldsOptions
export const formFieldsOptions = {
  name: { required: 'Required field', min: 1 },
  email: { required: 'Required field', pattern: { value: /^\S+@\S+$/i, message: 'Wrong format' } },
  phone: { required: 'Required field', minLength: 6, maxLength: 12 },
  address: { required: 'Required field', minLength: 6 },
  zipcode: { required: 'Required field', minLength: 3 },
  city: { required: 'Required field', minLength: 3 },
  country: { required: 'Required field', minLength: 3 },
  emoneyNum: { required: 'Required field', minLength: 6 },
  emoneyPin: { required: 'Required field', minLength: 4 },
}

// animStyles
export const animStyles = (isInView: boolean) => ({
  opacity: isInView ? 1 : 0,
  transition: 'all 0.5s ease-out',
})

// moveToTop
export const moveToTop = (isInView: boolean) => ({
  transform: isInView ? 'none' : 'translateY(100px)'
})

// moveToBottom
export const moveToBottom = (isInView: boolean) => ({
  transform: isInView ? 'none' : 'translateY(-100px)'
})

// moveToLeft
export const moveToLeft = (isInView: boolean) => ({
  transform: isInView ? 'none' : 'translateX(100px)'
})

// moveToRight
export const moveToRight = (isInView: boolean) => ({
  transform: isInView ? 'none' : 'translateX(-100px)'
})
