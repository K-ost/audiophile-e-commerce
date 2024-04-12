import styled from "styled-components"
import Increment from "../../ui/Increment"
import { Link } from "react-router-dom"
import { OrderType } from "../../types"
import { getImageLink } from "../../helpers/utils"
import { useAppStore } from "../../store/store"
import { useCallback } from "react"

interface ICartItem {
  el: OrderType
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
  line-height: 20px;
  a { color: inherit; display: block; text-decoration: none; }
  a:hover { color: var(--color-primary); }
`
const ItemPrice = styled.div`
  color: var(--color-text);
  font-size: 14px;
  font-weight: 700;
`

const CartItem: React.FC<ICartItem> = ({ el }) => {
  const { changeQuantityOrder } = useAppStore()

  // changeQuantityFunc
  const changeQuantityFunc = useCallback((val: number) => {
    changeQuantityOrder(val, el.id)
  }, [el.count])

  return (
    <Item>
      <Link to={`/p/${el.slug}`}>
        <img src={getImageLink(el.image)} alt="" />
      </Link>
      <ItemDetails>
        <ItemTitle>
          <Link to={`/p/${el.slug}`}>{el.name}</Link>
        </ItemTitle>
        <ItemPrice>$ {el.price.toLocaleString('en-US')}</ItemPrice>
      </ItemDetails>
      <Increment handler={(val) => changeQuantityFunc(val)} size="small" value={el.count} min={0} />
    </Item>
  )
}

export default CartItem
