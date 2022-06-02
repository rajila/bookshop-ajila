import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

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
      <h1>Listado de Libros</h1>
      <ItemListContainer title="Item 001" description="Description 001" onAdd={addElementToCart} key={1} />
    </div>
  );
}

export default App;
