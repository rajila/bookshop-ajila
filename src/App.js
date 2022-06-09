import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar elementsCart={0} />
        <Layout>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element = {<ItemDetailContainer />} />
            <Route path='*' element={ <Navigate to={'/'} /> } />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
