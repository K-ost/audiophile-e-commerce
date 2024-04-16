import styled from "styled-components"
import Btn from "../ui/Btn"
import img from "../assets/imgs/xx99.png"
import Header, { HeaderBox } from "./Header"

type HeadType = 'simple' | 'title' | 'banner'

interface IHeadBanner {
  title?: string
  type?: HeadType
}

// Styles
const Head = styled.div<{ $type: HeadType }>`
  background-color: #141414;
  ${props => props.$type === 'banner' && `
    background-image: url(${img});
    background-position: calc(50% + calc(var(--container) / 4)) 0;
    background-repeat: no-repeat;
  `}
  margin: 0 0 ${props => props.$type === 'banner' ? '120px' : '79px'};
  position: relative;
  &>.container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  ${HeaderBox} {
    ${props => props.$type === 'banner' && `
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 10;
    `}
    .container {
      ${props => props.$type !== 'simple' && 'border-bottom: 1px solid #313131;'}
      height: 97px;
    }
  }
  .container-banner { padding: 120px 0 158px; }
  @media screen and (max-width: 1020px) {
    ${props => props.$type === 'banner' && `
      background-position: center 0;
    `}
    margin: 0 0 ${props => props.$type === 'banner' ? '96px' : '33px'};
  }
  @media screen and (max-width: 750px) {
    ${props => props.$type === 'banner' && `
      background-size: 590px;
    `}
    margin: 0 0 ${props => props.$type === 'banner' ? '40px' : '16px'};
    .container-banner { padding: 108px 0 112px; }
  }
`
const HeadName = styled.div`
  color: var(--color-white);
  display: block !important;
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.43px;
  padding: 97px 0;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 750px) {
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 2px;
    padding: 32px 0;
  }
`
const Detail = styled.div`
  width: 400px;
  padding-top: 97px;
  @media screen and (max-width: 1020px) {
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1000;
  }
  @media screen and (max-width: 750px) {
    width: auto;
  }
`
const HeadNew = styled.div`
  color: #898989;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 0 0 24px;
  @media screen and (max-width: 750px) {
    margin: 0 0 16px;
  }
`
const HeadTitle = styled.div`
  color: #ffffff;
  font-size: 56px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 24px;
  @media screen and (max-width: 750px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.29px;
  }
`
const HeadText = styled.div`
  color: #c4c4c4;
  margin: 0 0 40px;
  max-width: 349px;
  @media screen and (max-width: 750px) {
    margin: 0 0 24px;
  }
`

const HeadBanner: React.FC<IHeadBanner> = ({ title, type = 'simple' }) => {
  return (
    <Head $type={type}>
      <Header />
      {type === 'banner' && <div className="container container-banner">
        <Detail>
          <HeadNew>NEW PRODUCT</HeadNew>
          <HeadTitle>XX99 Mark II Headphones</HeadTitle>
          <HeadText>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeadText>
          <Btn value="See Product" to="/p/xx99-mark-two-headphones" />
        </Detail>
      </div>}
      {type === 'title' && <HeadName className="container">{title}</HeadName>}
    </Head>
  )
}

export default HeadBanner
