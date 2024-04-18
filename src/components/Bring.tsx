import styled from "styled-components"
import bring from "../assets/imgs/bring.jpg"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { animStyles, moveToLeft, moveToRight } from "../helpers/utils"

// Styles
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  align-items: center;
  h2 { margin: 0 0 32px; }
  margin: 0 0 200px;
  img { border-radius: 8px; display: block; }
  div:nth-child(1) {
    padding-right: 125px;
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 64px;
    text-align: center;
    margin: 0 0 96px;
    div:nth-child(2) { grid-area: 1 / 1 / 2 / 2; }
    div:nth-child(1) { grid-area: 2 / 1 / 3 / 2; padding-right: 0; }
  }
  @media screen and (max-width: 1020px) {
    grid-row-gap: 40px;
    h2 { font-size: 28px; line-height: 36px; }
  }
`
const GridImg = styled.div`
  background: url(${bring}) center 0 / cover no-repeat;
  border-radius: 8px;
  height: 588px;
  width: 100%;
  @media screen and (max-width: 1020px) {
    height: 300px;
  }
`

const Bring: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 'all', once: true })

  return (
    <Grid ref={ref}>
      <div>
        <h2 style={{
          ...animStyles(isInView),
          ...moveToLeft(isInView),
          transitionDelay: `0ms`
        }}>Bringing you the <span className="color-primary">best</span> audio gear</h2>
        <div style={{
          ...animStyles(isInView),
          ...moveToRight(isInView),
          transitionDelay: `100ms`
        }}>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
      <div style={{
        ...animStyles(isInView),
        transform: `scale(${isInView ? 1 : 0.5})`,
        transitionDelay: `200ms`
      }}>
        <GridImg />
      </div>
    </Grid>
  )
}

export default Bring
