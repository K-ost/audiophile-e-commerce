import { useParams } from "react-router-dom"
import HeadBanner from "../components/HeadBanner"
import Bring from "../components/Bring"
import Categories from "../components/Categories"
import data from "../../data.json"
import { useEffect, useState } from "react"
import { ProductType } from "../types"
import Card from "../components/Card"

const Category: React.FC = () => {
  const { cat } = useParams()
  const [list, setList] = useState<ProductType[]>([])

  useEffect(() => {
    const cats: any = data.filter(el => el.category === cat)
    setTimeout(() => {
      setList(cats)
    }, 500)
  }, [cat])

  return (
    <>
      <HeadBanner type="title" title={cat} />
      
      <div className="container">
        {list && list.map((el, index) => {
          const odd = index % 2 !== 0
          return <Card key={el.id} el={el} odd={odd} />
        })}

        <Categories />

        <Bring />
      </div>
    </>
  )
}

export default Category
