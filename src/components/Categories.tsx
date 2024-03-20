import styled from "styled-components"
import cat1 from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import cat2 from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import cat3 from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import MoreBtn from "../ui/MoreBtn"

// Styles
const Cats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 0 160px;
  padding-top: 60px;
  &:last-child {
    margin: 0;
  }
`
const CatItem = styled.div`
  background: #F1F1F1;
  border-radius: 8px;
  position: relative;
  padding: 116px 30px 30px;
  text-align: center;
  h6 { margin: 0 0 15px; }
`
const CatItemImg = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: -60px;
  width: 100%;
  img {
    display: block;
    max-height: 200px;
  }
`

const Categories: React.FC = () => {
  return (
    <Cats>
      <CatItem>
        <CatItemImg>
          <img src={cat1} alt="" />
        </CatItemImg>
        <h6>Headphones</h6>
        <MoreBtn title="Shop" url="/headphones" />
      </CatItem>
      <CatItem>
        <CatItemImg>
          <img src={cat2} alt="" />
        </CatItemImg>
        <h6>Speakers</h6>
        <MoreBtn title="Shop" url="/speakers" />
      </CatItem>
      <CatItem>
        <CatItemImg>
          <img src={cat3} alt="" />
        </CatItemImg>
        <h6>Earphones</h6>
        <MoreBtn title="Shop" url="/earphones" />
      </CatItem>
    </Cats>
  )
}

export default Categories
