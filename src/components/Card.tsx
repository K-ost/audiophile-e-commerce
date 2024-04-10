import styled from "styled-components"
import { ProductType } from "../types"
import Btn from "../ui/Btn"
import { getImageLink } from "../helpers/image"
import Increment from "../ui/Increment"

interface ICard {
  el: ProductType
  odd?: boolean
  store?: boolean
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
  margin: 0 0 var(--margin);
  .details { padding-left: 100px; }
  &.odd {
    ${ProductBoxImg} { order: 2; }
    .details { order: 1; padding-left: 0; padding-right: 100px; }
  }
  @media screen and (max-width: 1020px) {
    display: block !important;
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
const ProductPrice = styled.div`
  color: var(--color-black);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  margin: 0 0 47px;
  @media screen and (max-width: 1020px) {
    margin: 0 0 31px;
  }
`
const ProductMeta = styled.div`
  display: flex;
  &>* { margin: 0 16px 0 0; &:last-child { margin: 0; } }
`

const Card: React.FC<ICard> = ({ el, odd, store }) => {
  return (
    <ProductBox className={`grid grid-2 ${odd ? 'odd' : ''}`}>
      <ProductBoxImg>
        <img src={getImageLink(el.image)} alt="" />
      </ProductBoxImg>
      <div className="details">
        {el.new && <ProductNew>NEW PRODUCT</ProductNew>}
        <ProductTitle>{el.name}</ProductTitle>
        <ProductText dangerouslySetInnerHTML={{ __html: el.description }}></ProductText>
        
        {!store && <Btn value="See Product" to={`/p/${el.slug}`} />}

        {store && <>
          <ProductPrice>$ {el.price.toLocaleString('en-US')}</ProductPrice>
          <ProductMeta>
            <Increment handler={() => {}} />
            <Btn value="ADD TO CART" />
          </ProductMeta>
        </>}
      </div>
    </ProductBox>
  )
}

export default Card
