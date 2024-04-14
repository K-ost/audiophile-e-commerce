import styled from "styled-components"
import { OrderType } from "../types"
import { convertPrice } from "../helpers/utils"

interface ITotal {
  orders: OrderType[]
  total: number
}

// Styles
const Wrap = styled.div`
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin: 0 0 46px;
  .left_part {
    background: var(--color-secondary);
    border-radius: 8px 0 0 8px;
    grid-area: 1 / 1 / 2 / 8;
    padding: 24px;
  }
  .total_part {
    background: var(--color-black);
    border-radius: 0 8px 8px 0;
    grid-area: 1 / 8 / 2 / 13;
    padding: 42px 32px;
    span { display: block; margin: 0 0 8px; text-transform: uppercase; }
    b {
      color: var(--color-white);
      display: block;
      font-size: 18px;
      font-weight: 700;
    }
  }
`


const Total: React.FC<ITotal> = ({ orders, total }) => {
  return (
    <Wrap className="grid grid-12 grid-mb-1">
      <div className="left_part">

      </div>
      <div className="total_part">
        <span>Grand Total</span>
        <b>$ {convertPrice(total)}</b>
      </div>
    </Wrap>
  )
}

export default Total
