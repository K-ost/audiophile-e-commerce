import styled from "styled-components"
import Includes from "./Includes"
import { IncludesType } from "../types"

interface IDescription {
  features: string
  includes: IncludesType[]
}

// Styles
const Box = styled.div`
  margin: 0 0 var(--margin);
  h3 { margin-top: 0; }
  div:nth-child(1) { grid-area: 1 / 1 / 2 / 8; }
  div:nth-child(2) { grid-area: 1 / 9 / 2 / 13; }
  @media screen and (max-width: 1020px) {
    display: block;
    margin: 0;
    div { margin: 0 0 var(--margin); }
  }
`

const Description: React.FC<IDescription> = ({ features, includes }) => {
  return (
    <Box className="grid grid-12 grid-tb-1">
      <div>
        <h3>Features</h3>
        <div dangerouslySetInnerHTML={{ __html: features }}></div>
      </div>
      <div>
        <Includes list={includes} />
      </div>
    </Box>
  )
}

export default Description
