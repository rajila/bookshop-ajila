import { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

import './ItemCount.css';

const ItemCount = ({ stock = 0, initial = 0, onAdd }) => {
      const INCREMENT_VALUE = 1;
      
      // Estados del componente para actualizar la informacion del layout el componente
      const [countBook, setCountBook] = useState(initial); // Numero de elementos que se desea comprar. Y para descontar el numero de elementos de stock
      const [stockDisponible, setStockDisponible] = useState(stock); // Stock disponible en el momento de la compra, y para las respetivas validaciones validaciones
      
      const updateCountBook = (e, value) => {
            if ( e.target.parentElement.name === 'plus' && (countBook >= stockDisponible) ) return;
            if ( e.target.parentElement.name === 'dash' && (countBook <= initial) ) return;
            setCountBook((countBook) => countBook + value);
      }

      const addCart = () => {
            if ( countBook < 1 || stockDisponible <= 0 ) return;
            setStockDisponible((stockDisponible) => stockDisponible - countBook);
            onAdd(countBook); // Call function onAdd del padre, aumenta el numero de productos en el carrito
            setCountBook(initial); // Reset count
      }

      return (
            <div className="container content-item-count">
                  <div>
                        <b>Stock disponible</b>: {stockDisponible}
                  </div>
                  <div>
                        {/* Desactiva el boton '-' si el numero de elementos es menor o igual al inicial */}
                        <button name='dash' className="btn-redondo" disabled={countBook <= initial} onClick={(e) => updateCountBook(e, -INCREMENT_VALUE)}>
                              <BsDash size={'1.5em'} />
                        </button>
                        <label className='elements-buy'>{countBook}</label>
                        {/* Desactiva el boton '+' si el numero de elementos es mayor o igual al stock disponible */}
                        <button name='plus' className="btn-redondo" disabled={countBook >= stockDisponible} onClick={(e) => updateCountBook(e, INCREMENT_VALUE)}>
                              <BsPlus size={'1.5em'} />
                        </button>
                  </div>
                  <div>
                        {/* Desactiva el boton Agregar al carrito si el numero de elementos es menor a 1 OR stockDisponible es menor o igual a CERO */}
                        <button className="btn-custom" disabled={(countBook < 1 || stockDisponible <= 0)} onClick={addCart}>
                              Agregar a carrito
                        </button>
                  </div>
            </div>
      );
}

export default ItemCount;