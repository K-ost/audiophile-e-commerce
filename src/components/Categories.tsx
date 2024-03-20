import styled from "styled-components"

// Styles
const Cats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  margin: 0 0 160px;
  &:last-child {
    margin: 0;
  }
`
const CatItem = styled.div`
  background: #F1F1F1;
  border-radius: 8px;
`

const Categories: React.FC = () => {
  return (
    <Cats>
      <CatItem>
        Headphones
        Shop
      </CatItem>
      <CatItem>
        Speakers
      </CatItem>
      <CatItem>
        Earphones
      </CatItem>
    </Cats>
  )
}

export default Categories
