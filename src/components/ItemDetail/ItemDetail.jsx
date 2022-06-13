import { useState } from 'react';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import imagennodisponible from './img/imagen-no-disponible.jpg';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
      const NO_EXISTE = 'Recurso no disponible';
      const INIT_VALUE = 0;
      const { id=0, title=NO_EXISTE, autor=NO_EXISTE, publication=1900, description=NO_EXISTE, price=0, stock=0, pictureUrl } = item;
      
      const { addItem, getQuantityByItem } = useCartContext();

      // Estado para ocultar el componente ItemCount
      const [finalizarCompra, setFinalizarCompra] = useState(false);
      
      // Funcion no implementada que se encarga de aumentar el numero de elementos en el carrito
      const onAdd = (quantityToAdd) => {
            setFinalizarCompra(true);
            addItem(item, quantityToAdd); // Call the addItem function from the context
            // console.log('Pendiente de implementar: Valor de carrito de compra con CONTEXT');
      };

      return (
            <div>
                  <h2>{title}</h2>
                  <div className="container detail-content">
                        <section>
                              <img src={ (pictureUrl) ? `/assets/img/books/${pictureUrl}` : imagennodisponible } alt={title} />
                        </section>
                        <hr id="separador-detail" className='separador-detail' />
                        <section>
                              <p className='text-start'><b>Autor(es): </b>{autor}</p>
                              <p className='text-start'><b>Publicación: </b>{publication}</p>
                              <p className='description-detail'><q><span className='d-d'>{description}</span></q></p>
                              <p className='detail-price'>€ {price}</p>
                              {/* // Call ItemCount */}
                              {
                                    finalizarCompra ?
                                          <Link to='/cart'>
                                                <button className="btn btn-primary">Terminar compra</button>
                                          </Link>
                                    :
                                          <ItemCount stock={stock - getQuantityByItem(id)} initial={INIT_VALUE} onAdd={onAdd} />
                              }
                        </section>
                  </div>
            </div>
      );
}

export default ItemDetail;