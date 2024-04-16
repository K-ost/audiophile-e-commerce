import styled from "styled-components"

interface IBars {
  nav: boolean
  open: React.Dispatch<React.SetStateAction<boolean>>
}

// Styles
const BarsBtn = styled.button<{ $opened: boolean }>`
  background: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: none;
  height: 32px;
  outline: 0;
  margin: 0 42px 0 0;
  padding: 0;
  min-width: 32px;
  max-width: 32px;
  position: relative;
  span {
    background: var(--color-white);
    height: 3px;
    width: 16px;
    position: absolute;
    left: 8px;
    top: 50%;
    margin-top: -1px;
    transition: var(--animate);
    &.top {
      top: ${props => props.$opened ? '16px' : '10px'};
      transform: ${props => props.$opened ? 'rotate(45deg)' : 'none'};
    }
    &.middle {
      opacity: ${props => props.$opened ? '0' : '1'};
      transform: ${props => props.$opened ? 'translateX(-10px)' : 'none'};
    }
    &.bottom {
      bottom: ${props => props.$opened ? '14px' : '8px'};
      top: auto;
      transform: ${props => props.$opened ? 'rotate(-45deg)' : 'none'};
    }
  }
  @media screen and (max-width: 1020px) {
    display: inline-flex;
  }
  @media screen and (max-width: 750px) {
    margin: 0 auto 0 0;
  }
`

const Bars: React.FC<IBars> = ({ nav, open }) => {
  return (
    <BarsBtn onClick={() => open(!nav)} $opened={nav}>
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </BarsBtn>
  )
}

export default Bars
