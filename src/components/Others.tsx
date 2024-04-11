import styled from "styled-components"
import { OthersType } from "../types"
import Btn from "../ui/Btn"
import { getImageLink } from "../helpers/utils"
import { Link } from "react-router-dom"

interface IOthers {
  others: OthersType[]
}

// Styles
const Wrap = styled.div`
  margin: 0 0 var(--margin);
  h3 { margin: 0 0 64px; text-align: center; }
  @media screen and (max-width: 750px) {
    .grid { grid-row-gap: 56px; }
  }
`
const Item = styled.div`
  text-align: center;
  h5 { margin: 0 0 32px; }
`
const ItemImg = styled(Link)`
  background: var(--color-secondary);
  border-radius: 8px;
  display: block;
  margin: 0 0 40px;
  overflow: hidden;
  img { display: block; margin: 0 auto; }
  @media screen and (max-width: 750px) {
    margin: 0 0 32px;
    img { height: 120px; }
  }
`

const Others: React.FC<IOthers> = ({ others }) => {
  return (
    <Wrap>
      <h3>You may also like</h3>
      <div className="grid grid-3 grid-mb-1">
        {others.map(el => (
          <Item key={el.slug}>
            <ItemImg to={`/p/${el.slug}`}>
              <img src={getImageLink(el.image)} alt="" />
            </ItemImg>
            <h5>{el.name}</h5>
            <Btn value="See Product" to={`/p/${el.slug}`} />
          </Item>
        ))}
      </div>
    </Wrap>
  )
}

export default Others