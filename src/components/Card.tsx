import styled from "styled-components"
import { ProductType } from "../types"
import Btn from "../ui/Btn"
import { getImageLink } from "../helpers/image"

interface ICard {
  el: ProductType
  odd: boolean
}

// Styles
const ProductBoxImg = styled.div`
  background: var(--color-secondary);
  img { display: block; margin: 0 auto; }
  @media screen and (max-width: 1020px) {
    margin: 0 0 52px;
    img { max-height: 352px; }
  }
  @media screen and (max-width: 750px) {
    margin: 0 0 32px;
  }
`
const ProductBox = styled.div`
  align-items: center;
  margin: 0 0 160px;
  .details { padding-left: 100px; }
  &.odd {
    ${ProductBoxImg} { order: 2; }
    .details { order: 1; padding-left: 0; padding-right: 100px; }
  }
  @media screen and (max-width: 1020px) {
    display: block !important;
    margin: 0 0 120px;
    .details { padding: 0 !important; text-align: center; }
  }
`
const ProductNew = styled.div`
  color: var(--color-primary);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 10px;
  margin: 0 0 16px;
  text-transform: uppercase;
`
const ProductTitle = styled.h2`
  color: var(--color-black);
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.43px;
  margin: 0 0 32px;
  text-transform: uppercase;
  @media screen and (max-width: 750px) {
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 1px;
    margin: 0 0 24px;
  }
`
const ProductText = styled.div`
  margin: 0 0 40px;
  @media screen and (max-width: 750px) {
    margin: 0 0 24px;
  }
`

const Card: React.FC<ICard> = ({ el, odd }) => {
  return (
    <ProductBox className={`grid grid-2 ${odd ? 'odd' : ''}`}>
      <ProductBoxImg>
        <img src={getImageLink(el.image)} alt="" />
      </ProductBoxImg>
      <div className="details">
        {el.new && <ProductNew>NEW PRODUCT</ProductNew>}
        <ProductTitle>{el.name}</ProductTitle>
        <ProductText dangerouslySetInnerHTML={{ __html: el.description }}></ProductText>
        <Btn value="See Product" to={`/p/${el.slug}`} />
      </div>
    </ProductBox>
  )
}

export default Card
