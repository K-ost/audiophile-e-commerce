import styled from "styled-components"
import Nav from "./Nav"
import Logo from "./Logo"
import Cart from "./cart/Cart"
import Modal from "../ui/Modal"
import { useState } from "react"
import CartModal from "./cart/CartModal"

// Styles
const HeaderBox = styled.header`
  background: var(--color-black);
  position: relative;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 97px;
    position: relative;
  }
`
const HeaderNav = styled.div`
  @media screen and (max-width: 1020px) {
    display: none;
  }
`

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <HeaderBox>
        <div className="container">
          <Logo />
          <HeaderNav>
            <Nav />
          </HeaderNav>
          <Cart click={setModal} modal={modal} />
        </div>
      </HeaderBox>
      <Modal modal={modal} close={setModal} position="top-right">
        <CartModal close={setModal} />
      </Modal>
    </>
  )
}

export default Header
