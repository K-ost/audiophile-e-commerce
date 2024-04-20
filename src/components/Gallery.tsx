import styled from "styled-components"
import { GalleryType } from "../types"
import Fancybox from "../helpers/Fancybox"

interface IGallery {
  gallery: GalleryType
}

// Styles
const GalleryBox = styled.div`
  margin: 0 0 var(--margin);
  height: 592px;
  div {
    border-radius: 8px;
    overflow: hidden;
    img { object-fit: cover; width: 100%; display: block; transition: all 400ms ease-in-out; }
    &:hover img { transform: scale(1.05); }
  }
  div:nth-child(1) { grid-area: 1 / 1 / 2 / 6; }
  div:nth-child(2) { grid-area: 2 / 1 / 3 / 6; }
  div:nth-child(3) { grid-area: 1 / 6 / 3 / 13; }
  @media screen and (max-width: 1020px) {
    height: 368px;
  }
  @media screen and (max-width: 750px) {
    display: block;
    height: auto;
    div { margin: 0 0 var(--gap); }
  }
`

const Gallery: React.FC<IGallery> = ({ gallery }) => {
  return (
    <Fancybox options={{
      Carousel: {
        infinite: false,
      },
      Toolbar: false,
      Thumbs: {
        type: "classic",
      },
    }}>
      <GalleryBox className="grid grid-12 grid-mb-1">
        <div>
          <a href={gallery.first} data-fancybox="gallery"><img src={gallery.first} alt="" /></a>
        </div>
        <div>
          <a href={gallery.second} data-fancybox="gallery"><img src={gallery.second} alt="" /></a>
        </div>
        <div>
          <a href={gallery.third} data-fancybox="gallery"><img src={gallery.third} alt="" /></a>
        </div>
      </GalleryBox>
    </Fancybox>
  )
}

export default Gallery
