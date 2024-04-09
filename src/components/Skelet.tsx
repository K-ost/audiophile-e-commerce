import styled from "styled-components"

// Styles
const SkeletBox = styled.div`
  align-items: center;
  padding-top: 127px; 
`
const SkeletLine = styled.div`
  background: var(--color-secondary);
  &.img { height: 540px; }
  &.new { height: 18px; margin: 0 0 24px; max-width: 220px; }
  &.title { height: 40px; margin: 0 0 8px; max-width: 260px; }
  &.text { height: 25px; margin: 0 0 8px; }
  &.btn { height: 48px; max-width: 160px; }
  &.last { margin: 0 0 34px; }
`
const SkeletDetails = styled.div`
  padding-left: 100px;
`

const Skelet: React.FC = () => {
  return (
    <SkeletBox className="grid grid-2">
      <SkeletLine className="img" />
      <SkeletDetails>
        <SkeletLine className="new" />
        <SkeletLine className="title" />
        <SkeletLine className="title last" />
        <SkeletLine className="text" />
        <SkeletLine className="text" />
        <SkeletLine className="text" />
        <SkeletLine className="text last" />
        <SkeletLine className="btn" />
      </SkeletDetails>
    </SkeletBox>
  )
}

export default Skelet
