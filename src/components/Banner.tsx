import Btn from "../ui/Btn"
import image from "../assets/product-zx9-speaker/desktop/image-product.jpg"
import styled from "styled-components"

interface IBanner {

}

// Styled
const Box = styled.div`
  background: var(--color-primary);
  border-radius: 8px;
  margin: 0 0 48px;
`

const Banner: React.FC<IBanner> = ({  }) => {
  return (
    <Box>
      <img src={image} alt="" />
      <h2>ZX9 SPEAKER</h2>
      <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <Btn value="See Product" />
    </Box>
  )
}

export default Banner
