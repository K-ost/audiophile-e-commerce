import { useParams } from "react-router-dom"
import HeadBanner from "../components/HeadBanner"
import Bring from "../components/Bring"
import Categories from "../components/Categories"
import { getCategory } from "../helpers/getData"
import Card from "../components/Card"
import { ProductType } from "../types"

const Category: React.FC = () => {
  const { cat } = useParams()
  const { data, loading } = getCategory<ProductType>(cat!)

  return (
    <>
      <HeadBanner type="title" title={cat} />

      <div className="container">
        {loading && 'loading...'}

        {data.map((el, index) => {
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
