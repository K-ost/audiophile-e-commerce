import styled from "styled-components"
import { GalleryType } from "../types"

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
    <GalleryBox className="grid grid-12 grid-mb-1">
      <div>
        <img src={gallery.first} alt="" />
      </div>
      <div>
        <img src={gallery.second} alt="" />
      </div>
      <div>
        <img src={gallery.third} alt="" />
      </div>
    </GalleryBox>
  )
}

export default Gallery
