import { useState } from 'react';

import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
      const INCREMENT_VALUE = 1;
      const [countBook, setCountBook] = useState(initial); // Numero de elementos que se desea comprar. Y para descontar el numero de elementos de stock
      const [stockDisponible, setStockDisponible] = useState(stock); // Stock disponible en el momento de la compra, y para las respetivas validaciones validaciones
      
      const updateCountBook = (value) => {
            setCountBook((countBook) => countBook + value);
      }

      const addCart = () => {
            setStockDisponible((stockDisponible) => stockDisponible - countBook);
            onAdd(countBook); // Call function onAdd and aumenta el numero de productos en el carrito
            setCountBook(initial); // Reset count
      }

      return (
            <div className="container content-item-count">
                  {/* Div temporal */}
                  <div>
                        <b>Stock disponible</b>: {stockDisponible}
                  </div>
                  <div>
                        {/* Desactiva el boton '-' si el numero de elementos es menor o igual al inicial */}
                        <button className="btn btn-primary" disabled={countBook <= initial} onClick={() => updateCountBook(-INCREMENT_VALUE)}>-</button>
                        <label className='elements-buy'>{countBook}</label>
                        {/* Desactiva el boton '+' si el numero de elementos es mayor o igual al stock disponible */}
                        <button className="btn btn-primary" disabled={countBook >= stockDisponible} onClick={() => updateCountBook(INCREMENT_VALUE)}>+</button>
                  </div>
                  <div>
                        {/* Desactiva el boton Agregar al carrito si el numero de elementos es menor a 1 OR stockDisponible es menor o igual a CERO */}
                        <button className="btn btn-primary" disabled={(countBook < 1 || stockDisponible <= 0)} onClick={addCart}>Agregar carrito</button>
                  </div>
            </div>
      );
}

export default ItemCount;