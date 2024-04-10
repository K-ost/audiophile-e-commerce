import styled from "styled-components"
import Increment from "../../ui/Increment"
import { Link } from "react-router-dom"

interface ICartItem {

}

// Styles
const Item = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 24px;
  img {
    border-radius: 8px;
    display: block;
    height: 64px;
    object-fit: cover;
    min-width: 64px;
    max-width: 64px;
    margin: 0 16px 0 0;
  }
`
const ItemDetails = styled.div`
  flex-grow: 1;
  margin: 0 16px 0 0;
`
const ItemTitle = styled.div`
  color: var(--color-black);
  font-weight: 700;
  a { color: inherit; text-decoration: none; }
  a:hover { color: var(--color-primary); }
`
const ItemPrice = styled.div`
  color: var(--color-text);
  font-size: 14px;
  font-weight: 700;
`

const CartItem: React.FC<ICartItem> = () => {
  return (
    <Item>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <ItemDetails>
        <ItemTitle>
          <Link to="/">XX99 MK II</Link>
        </ItemTitle>
        <ItemPrice>$ 2,999</ItemPrice>
      </ItemDetails>
      <Increment handler={() => {}} size="small" />
    </Item>
  )
}

export default CartItem
