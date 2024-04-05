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
  background: #141414;
  margin: 0 0 120px;
  position: relative;
  .container {
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
    `}
    .container {
      ${props => props.$type !== 'simple' && 'border-bottom: 1px solid #313131;'}
      height: 97px;
    }
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
`
const Detail = styled.div`
  width: 400px;
  padding-top: 97px;
`
const HeadNew = styled.div`
  color: #898989;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 0 0 24px;
`
const HeadTitle = styled.div`
  color: #ffffff;
  font-size: 56px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 24px;
`
const HeadText = styled.div`
  color: #c4c4c4;
  margin: 0 0 40px;
  max-width: 349px;
`

const HeadBanner: React.FC<IHeadBanner> = ({ title, type = 'simple' }) => {
  return (
    <Head $type={type}>
      <Header />
      {type === 'banner' && <div className="container">
        <Detail>
          <HeadNew>NEW PRODUCT</HeadNew>
          <HeadTitle>XX99 Mark II Headphones</HeadTitle>
          <HeadText>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeadText>
          <Btn value="See Product" />
        </Detail>
        <img src={img} alt="" />
      </div>}
      {type === 'title' && <HeadName className="container">{title}</HeadName>}
    </Head>
  )
}

export default HeadBanner
