import { Link } from "react-router-dom"
import styled from "styled-components"

// Styles
export const NavList = styled.ul`
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

const Nav: React.FC = () => {
  return (
    <nav>
      <NavList>
        <li><NavItem to="/">Home</NavItem></li>
        <li><NavItem to="/headphones">Headphones</NavItem></li>
        <li><NavItem to="/speakers">Speakers</NavItem></li>
        <li><NavItem to="/earphones">Earphones</NavItem></li>
      </NavList>
    </nav>
  )
}

export default Nav
