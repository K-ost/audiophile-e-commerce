import { useEffect, useState } from "react"
import dataJSON from "../../data.json"

const TIMEOUT = 500

interface IGetCat<T> {
  data: T[],
  loading: boolean
}

export const getCategory = <T, >(slug: string): IGetCat<T> => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const cat = dataJSON.filter(el => el.category === slug)
      setData(cat)
      setLoading(false)
    }, TIMEOUT)
  }, [slug])
  
  return { data, loading }
}
