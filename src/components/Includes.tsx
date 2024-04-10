import styled from "styled-components"
import { IncludesType } from "../types"

interface IIncludes {
  list: IncludesType[]
}

// Styles
const Wrap = styled.div`
  @media screen and (max-width: 1020px) {
    align-items: flex-start;
    display: flex;
    h3, ul { flex: 1; }
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
`
const List = styled.ul`
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  display: flex;
  list-style: none;
  margin: 0 0 8px;
  &:last-child { margin: 0; }
`
const Num = styled.span`
  color: var(--color-primary);
  display: inline-block;
  font-weight: 700;
  width: 34px;
  margin: 0 5px 0 0;
`

const Includes: React.FC<IIncludes> = ({ list }) => {
  return (
    <Wrap>
      <h3>in the box</h3>
      <List>
        {list.map((el, index) => <Item key={index}><Num>{el.quantity}x</Num> {el.item}</Item>)}
      </List>
    </Wrap>
  )
}

export default Includes
