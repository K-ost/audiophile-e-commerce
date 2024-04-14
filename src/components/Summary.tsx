import styled from "styled-components"
import CartItem from "./cart/CartItem"
import { convertPrice } from "../helpers/utils"
import { OrderType } from "../types"

interface ISummary {
  orders: OrderType[]
  total: number
  shipping: number
  vat: number
  totalWithTaxes: number
}

// Styles
const Total = styled.ul`
  margin: 32px 0;
  padding: 0;
  li {
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 0 8px;
    text-transform: uppercase;
    &:last-child { margin: 0; }
    &.vat { margin: 0 0 24px; }
  }
`
const Value = styled.div`
  color: var(--color-black);
  font-size: 18px;
  font-weight: 700;
  &.grand_total { color: var(--color-primary); }
`

const Summary: React.FC<ISummary> = ({ shipping, vat, orders, total, totalWithTaxes }) => {
  return (
    <div>
      {orders.map(el => <CartItem key={el.id} el={el} type="order" />)}
      <Total>
        <li>
          <div>Total</div>
          <Value>$ {convertPrice(total)}</Value>
        </li>
        <li>
          <div>Shipping</div>
          <Value>$ {shipping}</Value>
        </li>
        <li className="vat">
          <div>VAT (Included)</div>
          <Value>$ {convertPrice(vat)}</Value>
        </li>
        <li>
          <div>Grand Total</div>
          <Value className="grand_total">$ {convertPrice(totalWithTaxes)}</Value>
        </li>
      </Total>
    </div>
  )
}

export default Summary
