import { useParams } from "react-router-dom"
import Backlink from "../components/Backlink"
import HeadBanner from "../components/HeadBanner"
import getData from "../helpers/getData"
import { ProductType } from "../types"
import Skelet from "../components/Skelet"
import Card from "../components/Card"
import Gallery from "../components/Gallery"
import Description from "../components/Description"
import Categories from "../components/Categories"
import Bring from "../components/Bring"

const Product: React.FC = () => {
  const { product } = useParams()
  const { data, loading } = getData<ProductType>(product!, 'product')
  const el: ProductType = data[0]

  return (
    <>
      <HeadBanner type="simple" />
      <div className="container">
        <Backlink />

        {loading ? <Skelet /> : <>
          <Card el={el} store />

          <Description features={el.features} includes={el.includes} />

          <Gallery gallery={el.gallery} />

          
        </>}

        <Categories />

        <Bring />

      </div>
    </>
  )
}

export default Product
