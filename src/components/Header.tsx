import { useState } from "react"
import styled, { css } from "styled-components"
import Nav from "./Nav"
import Logo from "./Logo"
import Cart from "./cart/Cart"
import Modal from "../ui/Modal"
import CartModal from "./cart/CartModal"
import Bars from "../ui/Bars"
import Categories from "./Categories"

// Styles
export const HeaderBox = styled.header`
  .container {
    align-items: center;
    display: flex;
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
const NavStyles = css<{ $opened: boolean }>`
  opacity: ${props => props.$opened ? '1' : '0'};
  visibility: ${props => props.$opened ? 'visible' : 'hidden'};
  transition: var(--animate);
  top: 97px;
  left: 0;
  width: 100%;
`
const MobileMenuBackDrop = styled.div<{ $opened: boolean }>`
  background: rgba(0,0,0,0.75);
  position: fixed;
  bottom: 0;
  z-index: 1900;
  ${NavStyles}
`
const MobileMenu = styled.div<{ $opened: boolean }>`
  background: var(--color-white);
  border-radius: 0 0 8px 8px;
  position: absolute;
  padding: 54px 0;
  z-index: 2000;
  ${NavStyles}
  @media screen and (max-width: 750px) {
    padding: 32px 0;
  }
`

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [nav, setNav] = useState<boolean>(false)

  return (
    <>
      <HeaderBox>
        <div className="container">
          <Bars open={setNav} nav={nav} />
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

      <MobileMenu $opened={nav}>
        <div className="container">
          <Categories />
        </div>
      </MobileMenu>
      <MobileMenuBackDrop $opened={nav} onClick={() => setNav(false)} />
    </>
  )
}

export default Header
