import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';
import imagennodisponible from './img/imagen-no-disponible.jpg';

const ItemDetail = ({ item }) => {
      const NO_EXISTE = 'Recurso no disponible';
      const INIT_VALUE = 0;
      const { title=NO_EXISTE, autor=NO_EXISTE, publication=1900, description=NO_EXISTE, price=0, stock=0, pictureUrl } = item;
      
      // Funcion no implementada que se encarga de aumentar el numero de elementos en el carrito
      const addElementToCart = (value) => {
            console.log('Pendiente de implementar: Valor de carrito de compra con CONTEXT');
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
                              <ItemCount stock={stock} initial={INIT_VALUE} onAdd={addElementToCart} />
                        </section>
                  </div>
            </div>
      );
}

export default ItemDetail;