import Btn from "../ui/Btn"
import image from "../assets/imgs/zx9.png"
import image2 from "../assets/imgs/zx7.jpg"
import image3 from "../assets/imgs/yx1.jpg"
import circle from "../assets/svg/circle.svg"
import styled from "styled-components"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { animStyles, moveToTop, moveToBottom, moveToLeft, moveToRight } from "../helpers/utils"


type SizeBannerType = 'small' | 'large'
interface IBanners {
  size?: SizeBannerType
}

// Styled
const Wrap = styled.div`
  margin: 0 0 152px;
  @media screen and (max-width: 1020px) {
    margin: 0 0 64px;
  }
  @media screen and (max-width: 750px) {
    margin: 0 0 96px;
  }
`
const BoxTitle = styled.div<{ $size: SizeBannerType }>`
  color: var(--color-black);
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 32px;
  text-transform: uppercase;
`
const Box = styled.div<{ $size?: 'big' | 'small' }>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 48px;
  min-height: ${props => props.$size === 'big' ? '560px' : '320px'};
  padding: 32px 95px;
  overflow: hidden;
  position: relative;
  &.big {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
    background-color: var(--color-primary);
    background-image: url(${circle});
    background-position: -258px -36px;
    ${BoxTitle} { color: var(--color-white); font-size: 56px; line-height: 58px; margin: 0 0 24px; }
    .bigImage {
      display: block;
      position: relative;
      bottom: -72px;
    }
    @media screen and (max-width: 750px) {
      ${BoxTitle} {
        font-size: 36px;
        letter-spacing: 1.29px;
        line-height: 40px;
      }
    }
  }
  @media screen and (max-width: 1020px) {
    margin: 0 0 32px;
    padding: 42px;
    &.big {
      background-position: center -300px;
      background-size: 944px;
      display: block;
      padding: 52px 42px 64px;
      text-align: center;
      .bigImage { bottom: auto; width: 192px; margin: 0 auto 64px; }
    }
  }
  @media screen and (max-width: 750px) {
    &.big {
      background-position: center -140px;
      background-size: 610px;
    }
    &.small { min-height: 200px; }
    padding: 24px;
    margin: 0 0 24px;
  }
`
const Details = styled.div`
  max-width: 350px;
  p { margin: 0 0 40px; }
  @media screen and (max-width: 1020px) {
    margin: 0 auto;
  }
`

const Banners: React.FC<IBanners> = ({ size = 'small' }) => {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref1, { amount: 'all', once: true })
  const isInView2 = useInView(ref2, { amount: 'all', once: true })
  const isInView3 = useInView(ref3, { amount: 'all', once: true })

  return (
    <Wrap>
      <Box $size="big" className="big" ref={ref1}>
        <img src={image} alt="" className="bigImage" style={{ ...animStyles(isInView), ...moveToTop(isInView) }} />
        <Details>
          <BoxTitle $size={size} style={{ ...animStyles(isInView), ...moveToBottom(isInView), transitionDelay: '400ms' }}>ZX9 SPEAKER</BoxTitle>
          <p style={{ ...animStyles(isInView), ...moveToBottom(isInView), transitionDelay: '200ms' }}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <div style={{ ...animStyles(isInView), ...moveToBottom(isInView) }}>
            <Btn value="See Product" color="black" to="/p/zx9-speaker" />
          </div>
        </Details>
      </Box>

      <Box style={{ backgroundImage: `url(${image2})` }} ref={ref2}>
        <BoxTitle $size={size} style={{ ...animStyles(isInView2), ...moveToLeft(isInView2) }}>ZX7 SPEAKER</BoxTitle>
        <div style={{ ...animStyles(isInView2), ...moveToRight(isInView2) }}>
          <Btn value="See Product" color="secondary" to="/p/zx7-speaker" />
        </div>
      </Box>

      <div className="grid grid-2 grid-mb-1" ref={ref3}>
        <Box style={{
          backgroundImage: `url(${image3})`,
          ...animStyles(isInView3),
          ...moveToTop(isInView3)
        }} className="small"></Box>
        <Box style={{
          backgroundColor: '#f1f1f1',
          ...animStyles(isInView3),
          ...moveToTop(isInView3),
          transitionDelay: '200ms'
        }} className="small">
          <BoxTitle $size={size}>YX1 EARPHONES</BoxTitle>
          <Btn value="See Product" color="secondary" to="/p/yx1-earphones" />
        </Box>
      </div>
    </Wrap>
  )
}

export default Banners
