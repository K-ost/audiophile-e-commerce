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
  return (
    <LinkBox>
      <a href="#">Go Back</a>
    </LinkBox>
  )
}
export default Backlink
