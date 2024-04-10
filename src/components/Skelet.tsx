import styled from "styled-components"

interface ISkelet {
  number?: number
}

// Styles
const SkeletDetails = styled.div`
  padding-left: 100px;
`
const SkeletBox = styled.div`
  align-items: center;
  margin: 0 0 160px;
  &.odd {
    .skelet_img { order: 2; }
    .skelet_details { order: 1; padding-left: 0; padding-right: 100px; }
  }
  @media screen and (max-width: 1020px) {
    display: block !important;
    margin: 0 0 120px;
    .skelet_details { padding: 0 !important; }
  }
`
const SkeletLine = styled.div`
  background: var(--color-secondary);
  &.img { height: 540px; }
  &.new { height: 18px; margin-bottom: 24px; max-width: 220px; }
  &.title { height: 40px; margin-bottom: 8px; max-width: 260px; }
  &.text { height: 25px; margin-bottom: 8px; }
  &.btn { height: 48px; max-width: 160px; }
  &.last { margin-bottom: 34px; }
  @media screen and (max-width: 1020px) {
    margin-left: auto; margin-right: auto;
    &.img { height: 320px; margin-bottom: 34px; }
  }
`

const Skelet: React.FC<ISkelet> = ({ number = 1 }) => {
  const list = Array.from(Array(number))
  return (
    <>
      {list.map((el, index) => (
        <SkeletBox key={index} className={`grid grid-2 ${index % 2 !== 0 ? 'odd' : ''}`}>
          <SkeletLine className="skelet_img img" />
          <SkeletDetails className="skelet_details">
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
      ))}
    </>
  )
}

export default Skelet
