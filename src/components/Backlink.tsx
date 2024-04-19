import { useNavigate } from "react-router-dom"
import styled from "styled-components"

// Styles
const LinkBox = styled.div`
  margin: 0 0 38px;
  a {
    color: var(--color-text); text-decoration: none;
    &:hover { color: var(--color-primary); }
  }
`

const Backlink: React.FC = () => {
  const navigate = useNavigate()

  // backLinkFunc
  const backLinkFunc = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(-1)
  }
  

  return (
    <LinkBox>
      <a href="#" onClick={backLinkFunc}>Go Back</a>
    </LinkBox>
  )
}
export default Backlink
