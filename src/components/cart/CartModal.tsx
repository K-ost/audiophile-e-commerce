import styled from "styled-components"
import Btn from "../../ui/Btn"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import { useAppStore } from "../../store/store"
import { getOrderTotal, getOrdersCount } from "../../helpers/utils"

interface ICartModal {
  close: React.Dispatch<React.SetStateAction<boolean>>
}

// Styles
const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 32px;
  a { color: var(--color-text); }
  a:hover { color: var(--color-primary); text-decoration: underline; }
`
const Title = styled.div`
  color: var(--color-black);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`
const Total = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin: 0 0 24px;
  b {
    color: var(--color-black);
    font-size: 18px;
  }
`

const CartModal: React.FC<ICartModal> = ({ close }) => {
  const nav = useNavigate()
  const { orders, removeAllOrders } = useAppStore()
  const count = getOrdersCount(orders)
  const total = getOrderTotal(orders)

  // toCheckout
  const toCheckout = () => {
    close(false)
    nav('/checkout')
  }

  // removeCart
  const removeCart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    removeAllOrders()
  }

  return (
    <div>
      <Head>
        <Title>Cart {count > 0 && `(${count})`}</Title>
        {count > 0 && <a href="/" onClick={removeCart}>Remove all</a>}
      </Head>

      {count > 0 ? <>
        {orders.map(order => <CartItem key={order.id} el={order} />)}

        <Total>
          <div>TOTAL</div>
          <b>$ {total}</b>
        </Total>

        <Btn value="Checkout" handler={toCheckout} expand />
      </> : <div>Your cart is empty</div>}
    </div>
  )
}

export default CartModal
