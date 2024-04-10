
export type BtnColorType = 'primary' | 'secondary' | 'black' | 'link'

export type ModalPositionType = 'center' | 'top-right'

export type IncrementSizeType = 'large' | 'small'

export type IncludesType = {
  quantity: number
  item: string
}

export type GalleryType = {
  first: string
  second: string
  third: string
}

export type OthersType = {
  slug: string
  name: string
  image: string
}

export type ProductType = {
  id: number
  slug: string
  name: string
  image: string
  category: string
  categoryImage: string
  new: boolean
  price: number
  description: string
  features: string
  includes: IncludesType[]
  gallery: GalleryType
  others: OthersType[]
}