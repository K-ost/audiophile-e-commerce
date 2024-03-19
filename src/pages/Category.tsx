import { useParams } from "react-router-dom"

const Category: React.FC = () => {
  const { cat } = useParams()

  return (
    <div>
      <h1>{cat}</h1>
    </div>
  )
}

export default Category
