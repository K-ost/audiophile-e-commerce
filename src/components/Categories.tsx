import styled from "styled-components"
import cat1 from "../assets/imgs/cat1.png"
import cat2 from "../assets/imgs/cat2.png"
import cat3 from "../assets/imgs/cat3.png"
import { useInView } from "framer-motion"
import { useRef } from "react"
import CatItem from "./CatItem"

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

const Categories: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 'all' })

  return (
    <Cats className="grid grid-3 grid-mb-1" ref={ref}>
      <CatItem img={cat1} isInView={isInView} link="/headphones" title="Headphones" delay={0} />
      <CatItem img={cat2} isInView={isInView} link="/speakers" title="Speakers" delay={200} />
      <CatItem img={cat3} isInView={isInView} link="/earphones" title="Earphones" delay={400} />
    </Cats>
  )
}

export default Categories
