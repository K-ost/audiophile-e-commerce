import styled from "styled-components"
import Nav from "./Nav"
import Logo from "./Logo"
import Cart from "./cart/Cart"

// Styles
const HeaderBox = styled.header`
  background: var(--color-black);
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
  return (
    <HeaderBox>
      <div className="container">
        <Logo />
        <HeaderNav>
          <Nav />
        </HeaderNav>
        <Cart />
      </div>
    </HeaderBox>
  )
}

export default Header
