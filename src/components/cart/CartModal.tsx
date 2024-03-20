import styled from "styled-components"
import Btn from "../../ui/Btn"
import { useNavigate } from "react-router-dom"
import Increment from "../../ui/Increment"

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

  // toCheckout
  const toCheckout = () => {
    close(false)
    nav('/checkout')
  }

  return (
    <div>
      <Head>
        <Title>cart (3)</Title>
        <a href="/">Remove all</a>
      </Head>

      <Total>
        <div>TOTAL</div>
        <b>$ 5,396</b>
      </Total>

      <Btn value="Checkout" handler={toCheckout} expand />
    </div>
  )
}

export default CartModal
