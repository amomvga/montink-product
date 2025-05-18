export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  images: string[]
  colors: Array<{
    id: string
    name: string
    value: string
  }>
  sizes: Array<{
    id: string
    name: string
    value: string
  }>
}
