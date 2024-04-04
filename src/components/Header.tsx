import styled from "styled-components"
import Nav from "./Nav"
import Logo from "./Logo"
import Cart from "./cart/Cart"
import Modal from "../ui/Modal"
import { useState } from "react"
import CartModal from "./cart/CartModal"
import Bars from "../ui/Bars"

// Styles
const HeaderBox = styled.header`
  background: #141414;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    height: 97px;
    position: relative;
  }
`
const HeaderNav = styled.div`
  margin: 0 0 0 auto;
  @media screen and (max-width: 1020px) {
    display: none;
  }
`
const HeaderCart = styled.div`
  margin: 0 0 0 auto;
`

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [nav, setNav] = useState<boolean>(false)

  return (
    <>
      <HeaderBox>
        <div className="container">
          <Bars open={setNav} />
          <Logo />
          <HeaderNav>
            <Nav />
          </HeaderNav>
          <HeaderCart>
            <Cart click={setModal} modal={modal} />
          </HeaderCart>
        </div>
      </HeaderBox>
      <Modal modal={modal} close={setModal} position="top-right">
        <CartModal close={setModal} />
      </Modal>
    </>
  )
}

export default Header
