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
      <h1>Listado de Items</h1>
      <ItemListContainer title="Item 001" description="Description 001" onAdd={addElementToCart} key={1} />
      <ItemListContainer title="Item 002" description="Description 002" onAdd={addElementToCart} key={2} />
      {/* <ItemListContainer title="Item 003" description="Description 003" key={3} /> */}
    </div>
  );
}

export default App;
