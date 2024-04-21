import styled from "styled-components"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Categories from "./Categories"

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

const CategoriesAnimate: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 'some' })

  return (
    <Cats ref={ref}>
      <Categories isInView={isInView} animated />
    </Cats>
  )
}

export default CategoriesAnimate
