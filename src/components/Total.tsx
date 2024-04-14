import styled from "styled-components"
import { OrderType } from "../types"
import { convertPrice } from "../helpers/utils"
import CartItem from "./cart/CartItem"
import { useRef, useState } from "react"

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
    align-content: flex-end;
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
  @media screen and (max-width: 750px) {
    .left_part, .total_part { grid-area: auto; }
    .left_part { border-radius: 8px 8px 0 0; }
    .total_part { border-radius: 0 0 8px 8px; padding: 16px 24px; }
  }
`
const Line = styled.div`
  border-top: 1px solid #DEDEDE;
  font-size: 12px;
  font-weight: 700;
  margin-top: 12px;
  padding-top: 12px;
  text-align: center;
  a {
    color: var(--color-text);
    text-decoration: none;
  }
`
const List = styled.div`
  overflow: hidden;
  transition: height 100ms linear;
`
const Inner = styled.div`
  &>div { padding-top: 16px; }
`


const Total: React.FC<ITotal> = ({ orders, total }) => {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  // openHandler
  const openHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Wrap className="grid grid-12 grid-mb-1">
      <div className="left_part">
        <div>
          <CartItem el={orders[0]} type="small" />
        </div>
        <List style={{ height: open ? ref.current?.offsetHeight : 0 }}>
          <Inner ref={ref}>
            {orders.map((el, index) => {
              if (index !== 0) {
                return <div key={el.id}><CartItem el={el} type="small" /></div>
              }
            })}
          </Inner>
        </List>
        {orders.length > 1 && <Line>
          <a href="#" onClick={openHandler}>{open ? 'View less' : 'and 2 other item(s)'}</a>
        </Line>}
      </div>
      <div className="total_part">
        <span>Grand Total</span>
        <b>$ {convertPrice(total)}</b>
      </div>
    </Wrap>
  )
}

export default Total
