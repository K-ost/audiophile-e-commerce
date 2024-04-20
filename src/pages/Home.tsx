import Banner from "../components/Banners"
import Bring from "../components/Bring"
import CategoriesAnimate from "../components/CategoriesAnimate"
import HeadBanner from "../components/HeadBanner"

const Home: React.FC = () => {
  return (
    <>
      <HeadBanner type="banner" />
      <div className="container">
        <CategoriesAnimate />
        <Banner />
        <Bring />
      </div>
    </>
  )
}

export default Home
