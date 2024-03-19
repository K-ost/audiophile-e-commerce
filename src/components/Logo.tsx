import styled from "styled-components"
import logo from "../assets/logo.svg"

// Styles
const LogoBox = styled.div`
  display: inline-block;
  img { display: block; }
`

const Logo: React.FC = () => {
  return (
    <LogoBox>
      <img src={logo} alt="" />
    </LogoBox>
  )
}

export default Logo
