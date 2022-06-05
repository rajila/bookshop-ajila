import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';
import imagennodisponible from './img/imagen-no-disponible.jpg';

const ItemDetail = ({ item, onAdd }) => {
      const NO_EXISTE = 'Recurso no disponible';
      const { title=NO_EXISTE, autor=NO_EXISTE, publication=1900, description=NO_EXISTE, price=0, stock=0, pictureUrl } = item;
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
                              <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                        </section>
                  </div>
            </div>
      );
}

export default ItemDetail;