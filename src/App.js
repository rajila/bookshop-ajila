import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  // Variable de estado TEMMPORAL para el componente ItemListContainer. Hacer uso de un CONTEXT
  const [elementsCart, setElementsCart] = useState(0);
  const addElementToCart = (value) => {
    setElementsCart((elementsCart) => elementsCart + value);
    alert("El/los producto/s se ha/n agregado/s al carrito");
  }

  return (
    <div className="App">
      <NavBar elementsCart={elementsCart} />
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer title="Item 001" description="Description 001" onAdd={addElementToCart} />} />
          <Route path="/libros" element={<ItemListContainer title="Item 001" description="Description 001" onAdd={addElementToCart} />} />
          <Route path="/libros/item/:id" element = {<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to={"/"} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
