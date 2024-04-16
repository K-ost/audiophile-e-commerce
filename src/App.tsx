import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'
import ScrollToTop from './helpers/ScrollToTop'
import PrivateRoute from './components/PrivateRoute'
import { useAppStore } from './store/store'

function App() {
  const { orders } = useAppStore()

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/:cat" element={<Category />} />
        <Route path="/p/:product" element={<Product />} />
        <Route path="/" element={<PrivateRoute isOrders={!!orders.length} />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
