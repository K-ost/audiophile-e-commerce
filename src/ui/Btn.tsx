import styled, { css } from "styled-components"
import { BtnColorType } from "../types"

interface IBtn {
  handler?: () => void
  value: string
  color?: BtnColorType
}

// styles
const btnStyles = css<{ $color: BtnColorType }>`
  background: var(--color-${({ $color }) => $color === 'secondary' ? 'white' : 'primary'});
  border: 1px solid ${props => props.$color === 'secondary' ? 'var(--color-black)' : 'transparent'};
  border-radius: 0;
  color: var(--color-${props => props.$color === 'secondary' ? 'black' : 'white'});
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 16px;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: var(--animate);
  &:hover {
    background: var(--color-${props => props.$color === 'secondary' ? 'black' : 'primary-hover'});
    color: var(--color-${props => props.$color === 'secondary' ? 'white' : 'white'});
  }
`
const BtnBox = styled.button<{ $color: BtnColorType }>`
  cursor: pointer;
  ${btnStyles}
`

const Btn: React.FC<IBtn> = ({ color = 'primary', handler, value }) => {
  return (
    <BtnBox onClick={handler} $color={color}>{value}</BtnBox>
  )
}

export default Btn
