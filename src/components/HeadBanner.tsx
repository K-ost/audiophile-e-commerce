import styled from "styled-components"
import Btn from "../ui/Btn"
import img from "../assets/imgs/xx99.png"

interface IHeadBanner {

}

// Styles
const Head = styled.div`
  background: #141414;
  margin: 0 0 120px;
  .container {
    border-top: 1px solid #373737;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`
const Detail = styled.div`
  width: 400px;
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

const HeadBanner: React.FC<IHeadBanner> = () => {
  return (
    <Head>
      <div className="container">
        <Detail>
          <HeadNew>NEW PRODUCT</HeadNew>
          <HeadTitle>XX99 Mark II Headphones</HeadTitle>
          <HeadText>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeadText>
          <Btn value="See Product" />
        </Detail>
        <img src={img} alt="" />
      </div>
    </Head>
  )
}

export default HeadBanner
