import styled, { css } from "styled-components"
import { BtnColorType } from "../types"
import { Link } from "react-router-dom"

interface IBtn {
  handler?: () => void
  value: string
  color?: BtnColorType
  expand?: boolean
  to?: string
}

// styles
const btnStyles = css<{ $color: BtnColorType, $expand: boolean }>`
  background: ${({ $color }) => $color === 'secondary' ? '0' : $color === 'black' ? 'var(--color-black)' : 'var(--color-primary)' };
  border: 1px solid ${props => props.$color === 'secondary' ? 'var(--color-black)' : 'transparent'};
  border-radius: 0;
  color: var(--color-${props => props.$color === 'secondary' ? 'black' : 'white'});
  font-size: 13px;
  display: ${props => props.$expand ? 'block' : 'inline-block'};
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 16px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--animate);
  ${props => props.$expand && 'width: 100%;'}
  &:hover {
    background: ${({ $color }) => $color === 'secondary' ? 'black' : $color === 'black' ? 'var(--color-black-hover)' : 'var(--color-primary-hover)' };
    color: var(--color-${props => props.$color === 'secondary' ? 'white' : 'white'});
  }
`
const BtnBox = styled.button<{ $color: BtnColorType, $expand: boolean }>`
  cursor: pointer;
  ${btnStyles}
`
const BtnLink = styled(Link)<{ $color: BtnColorType, $expand: boolean }>`
  cursor: pointer;
  ${btnStyles}
`

const Btn: React.FC<IBtn> = ({ color = 'primary', expand = false, handler, to, value }) => {
  return (
    <>
      {!!to
        ? <BtnLink to={to} $color={color} $expand={expand}>{value}</BtnLink>
        : <BtnBox onClick={handler} $color={color} $expand={expand}>{value}</BtnBox>
      }
    </>
  )
}

export default Btn
