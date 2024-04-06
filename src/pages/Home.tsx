import Banner from "../components/Banners"
import Bring from "../components/Bring"
import Categories from "../components/Categories"
import HeadBanner from "../components/HeadBanner"

const Home: React.FC = () => {
  return (
    <>
      <HeadBanner type="banner" />
      <div className="container">
        <Categories />
        <Banner />
        <Bring />
      </div>
    </>
  )
}

export default Home
