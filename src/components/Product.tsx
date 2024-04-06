import styled from "styled-components"
import { ProductType } from "../types"
import Btn from "../ui/Btn"

interface IProduct {
  el: ProductType
}

// Styles
const ProductBox = styled.div`
  
`
const ProductNew = styled.div`
  color: var(--color-primary);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 10px;
  margin: 0 0 16px;
  text-transform: uppercase;
`
const ProductTitle = styled.div`
  color: var(--color-primary);
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.43px;
  margin: 0 0 32px;
  text-transform: uppercase;
`
const ProductText = styled.div`
  margin: 0 0 40px;
`

const Product: React.FC<IProduct> = ({ el }) => {
  return (
    <ProductBox className="grid grid-2">
      <img src={el.image} alt="" />
      <div>
        {el.new && <ProductNew>NEW PRODUCT</ProductNew>}
        <ProductTitle>{el.name}</ProductTitle>
        <ProductText dangerouslySetInnerHTML={{ __html: el.description }}></ProductText>
        <Btn value="See Product" />
      </div>
    </ProductBox>
  )
}

export default Product
