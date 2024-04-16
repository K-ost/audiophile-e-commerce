import { Navigate, Outlet } from "react-router-dom"

interface PrivateRoute {
  isOrders: boolean
}

const PrivateRoute: React.FC<PrivateRoute> = ({ isOrders }) => {
  return isOrders ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
