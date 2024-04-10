import { useEffect, useState } from "react"
import dataJSON from "../../data.json"

const TIMEOUT = 500

type DataType = 'cat' | 'product'

interface IGetData<T> {
  data: T[],
  loading: boolean
}

// getCategory
const getData = <T, >(slug: string, type: DataType): IGetData<T> => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const cat: any = type === 'cat' ? dataJSON.filter(el => el.category === slug).reverse() : dataJSON.filter(el => el.slug === slug)
      setData(cat)
      setLoading(false)
    }, TIMEOUT)
  }, [slug])
  
  return { data, loading }
}

export default getData
