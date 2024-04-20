import cat1 from "../assets/imgs/cat1.png"
import cat2 from "../assets/imgs/cat2.png"
import cat3 from "../assets/imgs/cat3.png"
import CatItem from "./CatItem"

interface ICategories {
  animated?: boolean
  isInView?: boolean
}

const Categories: React.FC<ICategories> = ({ animated = false, isInView = false }) => {
  return (
    <div className="grid grid-3 grid-mb-1">
      <CatItem img={cat1} isInView={isInView} link="/headphones" title="Headphones" delay={0} animated={animated} />
      <CatItem img={cat2} isInView={isInView} link="/speakers" title="Speakers" delay={200} animated={animated} />
      <CatItem img={cat3} isInView={isInView} link="/earphones" title="Earphones" delay={400} animated={animated} />
    </div>
  )
}

export default Categories
