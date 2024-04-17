import styled from "styled-components"
import cat1 from "../assets/imgs/cat1.png"
import cat2 from "../assets/imgs/cat2.png"
import cat3 from "../assets/imgs/cat3.png"
import oval from "../assets/oval.png"
import MoreBtn from "../ui/MoreBtn"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Styles
const Cats = styled.div`
  margin: 0 0 var(--margin);
  &:last-child { margin: 0; }
  @media screen and (max-width: 1020px) {
    margin: 0 0 96px;
  }
  @media screen and (max-width: 750px) {
    margin: 0 0 var(--margin);
  }
`
const CatItem = styled.div`
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
const CatItemImg = styled.div`
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

const Categories: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Cats className="grid grid-3 grid-mb-1" ref={ref}>
      <CatItem style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: '0ms'
      }}>
        <CatItemImg>
          <img src={cat1} alt="" />
        </CatItemImg>
        <h6>Headphones</h6>
        <MoreBtn title="Shop" url="/headphones" />
      </CatItem>
      <CatItem style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: '200ms'
      }}>
        <CatItemImg>
          <img src={cat2} alt="" />
        </CatItemImg>
        <h6>Speakers</h6>
        <MoreBtn title="Shop" url="/speakers" />
      </CatItem>
      <CatItem style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: '400ms'
      }}>
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
