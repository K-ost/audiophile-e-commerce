import oval from "../assets/oval.png"
import styled from 'styled-components'
import MoreBtn from "../ui/MoreBtn"
import { getImageLink } from "../helpers/utils"

interface ICatItem {
  animated?: boolean
  delay?: number
  img: any
  isInView?: boolean
  link: string
  title: string
}

// Styles
const Item = styled.div`
  background: #f1f1f1 url(${oval}) center 30px no-repeat;
  border-radius: 8px;
  position: relative;
  margin: 68px 0 0;
  padding: 116px 30px 30px;
  text-align: center;
  h6 { margin: 0 0 15px; }
  @media screen and (max-width: 1020px) {
    background-size: 120px;
    background-position: center 20px;
    padding: 88px 22px 22px;
    h6 { font-size: 15px; line-height: 18px; }
  }
`
const ItemImg = styled.div`
  align-items: center;
  display: flex;
  height: 160px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: -80px;
  width: 100%;
  img { display: block; }
  @media screen and (max-width: 1020px) {
    height: 104px; top: -52px;
    img { max-height: 100px; }
  }
`

const CatItem: React.FC<ICatItem> = ({ animated = false, img, isInView = false, link, title, delay }) => {
  return (
    <Item style={animated ? {
      transform: isInView ? "none" : "translateY(50px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      transitionDelay: `${delay}ms`
    } : undefined}>
      <ItemImg>
        <img src={getImageLink(img)} alt="" />
      </ItemImg>
      <h6>{title}</h6>
      <MoreBtn title="Shop" url={link} />
    </Item>
  )
}

export default CatItem
