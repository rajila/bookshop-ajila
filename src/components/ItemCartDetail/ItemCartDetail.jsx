import { BsXLg } from 'react-icons/bs';

import './ItemCartDetail.css';

const ItemCartDetail = ({ item, onRemoveItemCart }) => {
      const { id, title, autor, price=0, quantity, publication, pictureUrl } = item;
      
      return (
            <div className="container item-cart-content">
                  <div className="row">
                        <div className="col-md-auto">
                              <img src={ `/assets/img/books/${pictureUrl}`} alt={title} />
                        </div>
                        <div className="col">
                              <section className='row'>
                                    <section className='col-md-auto'>
                                          <h4 className='text-start'>{title}</h4>
                                    </section>
                                    <section className='col text-end'>
                                          <button onClick={ () => onRemoveItemCart(id, title) } className="btn-redondo">
                                                <BsXLg />
                                          </button>
                                    </section>
                              </section>
                              <p className='text-start p-autor'><b>Autor(es): </b> {autor}</p>
                              <p className='text-start'><b>Año publicación: </b> {publication}</p>
                              <p className='text-start'><b>Cantidad: </b> {quantity}</p>
                              
                              <section className='row'>
                                    <section className='col-md-auto'>
                                          <p className='text-start'><b>Precio: </b> {price} €</p>
                                    </section>
                                    <section className='col'>
                                          <p className='text-end total-item-cart'>{Number((price * quantity).toFixed(2))} €</p>
                                    </section>
                              </section>
                        </div>
                  </div>
            </div>
      );
}

export default ItemCartDetail;