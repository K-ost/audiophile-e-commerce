import styled from "styled-components"

interface IBars {
  open: React.Dispatch<React.SetStateAction<boolean>>
}

// Styles
const BarsBtn = styled.button`
  align-items: center;
  background: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: none;
  height: 32px;
  justify-content: center;
  outline: 0;
  margin: 0 42px 0 0;
  padding: 0;
  min-width: 32px;
  max-width: 32px;
  @media screen and (max-width: 1020px) {
    display: inline-flex;
  }
  @media screen and (max-width: 750px) {
    margin: 0 auto 0 0;
  }
`

const Bars: React.FC<IBars> = ({ open }) => {
  return (
    <BarsBtn onClick={() => open(true)}>
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="3" fill="white"/>
        <rect y="6" width="16" height="3" fill="white"/>
        <rect y="12" width="16" height="3" fill="white"/>
      </svg>
    </BarsBtn>
  )
}

export default Bars
