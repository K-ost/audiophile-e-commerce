import { useParams } from "react-router-dom"
import HeadBanner from "../components/HeadBanner"
import Bring from "../components/Bring"
import getData from "../helpers/getData"
import Card from "../components/Card"
import { ProductType } from "../types"
import Skelet from "../components/Skelet"
import CategoriesAnimate from "../components/CategoriesAnimate"

const Category: React.FC = () => {
  const { cat } = useParams()
  const { data, loading } = getData<ProductType>(cat!, 'cat')

  return (
    <>
      <HeadBanner type="title" title={cat} />

      <div className="container container-cat">
        {loading && <Skelet number={3} />}

        <div>
          {data.map((el, index) => {
            const odd = index % 2 !== 0
            return <Card key={el.id} el={el} odd={odd} />
          })}
        </div>

        <CategoriesAnimate />

        <Bring />
      </div>
    </>
  )
}

export default Category
