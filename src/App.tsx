import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/:cat" element={<Category />} />
        <Route path="/:product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
