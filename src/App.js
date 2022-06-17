import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Layout>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='/item/:id' element = {<ItemDetailContainer />} />
              <Route path='/cart' element = {<Cart />} />
              <Route path='*' element={ <Navigate to={'/'} /> } />
            </Routes>
          </Layout>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
