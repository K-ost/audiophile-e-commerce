import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

// Styles
const HeaderBox = styled.header`
  background: var(--color-black);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 97px;
  }
`
const Logo = styled.div`
  img { display: block; }
`
const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    font-size: 13px;
    font-weight: 700;
    margin: 0 34px 0 0;
    text-transform: uppercase;
    &:last-child { margin: 0; }
  }
`
const NavItem = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  transition: var(--animate);
  &:hover { color: var(--color-primary); }
`

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <div className="container">
        <Logo>
          <img src={logo} alt="" />
        </Logo>

        <nav>
          <NavList>
            <li><NavItem to="/">Home</NavItem></li>
            <li><NavItem to="/headphones">Headphones</NavItem></li>
            <li><NavItem to="/speakers">Speakers</NavItem></li>
            <li><NavItem to="/earphones">Earphones</NavItem></li>
          </NavList>
        </nav>

        <Link to="/checkout">Checkout</Link>
      </div>
    </HeaderBox>
  )
}

export default Header
