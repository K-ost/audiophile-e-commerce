import { useParams } from "react-router-dom"
import Backlink from "../components/Backlink"
import HeadBanner from "../components/HeadBanner"
import getData from "../helpers/getData"
import { ProductType } from "../types"
import Skelet from "../components/Skelet"
import Card from "../components/Card"

const Product: React.FC = () => {
  const { product } = useParams()
  const { data, loading } = getData<ProductType>(product!, 'product')

  return (
    <>
      <HeadBanner type="simple" />
      <div className="container">
        <Backlink />

        {loading ? <Skelet /> : <Card el={data[0]} />}

      </div>
    </>
  )
}

export default Product
