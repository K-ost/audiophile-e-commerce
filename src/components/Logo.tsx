import styled from "styled-components"
import logo from "../assets/svg/logo.svg"
import { Link } from "react-router-dom"

// Styles
const LogoBox = styled.div`
  display: inline-block;
  img { display: block; }
`

const Logo: React.FC = () => {
  return (
    <LogoBox>
      <Link to="/"><img src={logo} alt="" /></Link>
    </LogoBox>
  )
}

export default Logo
