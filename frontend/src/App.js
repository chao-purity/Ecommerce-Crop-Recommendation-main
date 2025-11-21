import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Home } from './Pages/Home';
import { CropRecommendation } from './Pages/Form';
import { Footer } from './Components/Footer/Footer';
import cereals_banner from './Components/Assets/cereals.jpg';
import legumes_banner from './Components/Assets/legumes.jpg';
import vegetables_banner from './Components/Assets/veggie.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cereals' element={<ShopCategory banner={cereals_banner} category="cereals" />} />
          <Route path='/vegetables' element={<ShopCategory banner={vegetables_banner} category="vegetables" />} />
          <Route path='/legumes' element={<ShopCategory banner={legumes_banner} category="legumes" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/recommendation' element={<CropRecommendation />} />
        </Routes>
        {window.location.pathname !== '/login' && <Footer />} {/* Conditionally render Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
