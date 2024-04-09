import { useParams } from "react-router-dom"
import HeadBanner from "../components/HeadBanner"
import Bring from "../components/Bring"
import Categories from "../components/Categories"
import { getCategory } from "../helpers/getData"
import Card from "../components/Card"
import { ProductType } from "../types"
import styled from "styled-components"
import Skelet from "../components/Skelet"

// Styles
const Cats = styled.div`
  padding-top: 127px;
  @media screen and (max-width: 1020px) {
    padding-top: 95px;
  }
  @media screen and (max-width: 750px) {
    padding-top: 48px;
  }
`

const Category: React.FC = () => {
  const { cat } = useParams()
  const { data, loading } = getCategory<ProductType>(cat!)

  return (
    <>
      <HeadBanner type="title" title={cat} />

      <div className="container">
        {loading && <Skelet />}

        <Cats>
          {data.map((el, index) => {
            const odd = index % 2 !== 0
            return <Card key={el.id} el={el} odd={odd} />
          })}
        </Cats>

        <Categories />

        <Bring />
      </div>
    </>
  )
}

export default Category
