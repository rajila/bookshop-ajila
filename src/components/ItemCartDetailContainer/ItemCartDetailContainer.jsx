import ItemCartDetail from "../ItemCartDetail/ItemCartDetail";

import './ItemCartDetailContainer.css';

const ItemCartDetailContainer = ({ cart, removeItem, getTotal, clear }) => {
      const onRemoveItemCart = (id, title) => {
            console.log('id:', id);
            removeItem(id);
            alert(`Se ha eliminado el ejemplar '${title}' de la cesta`);
      };

      const onComprar = () => {
            alert(`EN DESARROLLO...`);
      };

      const drawItemsCart = () => {
            return cart.map((item, index) => {
                  return (
                        <div key={item.id}>
                              <ItemCartDetail item={item} onRemoveItemCart={onRemoveItemCart} />
                              { (cart.length - 1 === index) || <hr id="separador-detail1" className='separador-detail1' /> }
                        </div>
                  );
            });
      };

      const drawResumenCart = () => {
            return(
                  <>
                        <section className='row'>
                              <section className='col'>
                                    <h6 className='text-start'>Subtotal</h6>
                              </section>
                              <section className='col-md-auto text-end'>
                                    <span>{ getTotal() } €</span>
                              </section>
                        </section>
                        <section className='row'>
                              <section className='col'>
                                    <h6 className='text-start'>Gastos de envío y gestión&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                              </section>
                              <section className='col-md-auto text-end'>
                                    <span>0.00 €</span>
                              </section>
                        </section>
                        <hr />
                        <section className='row'>
                              <section className='col'>
                                    <h6 className='text-start'>Total</h6>
                              </section>
                              <section className='col-md-auto text-end'>
                                    <span><b>{ getTotal() } €</b></span>
                              </section>
                        </section>
                        <hr />
                        <section className='row'>
                              <section className='col text-center'>
                                    <button onClick={onComprar} className="btn-custom">
                                          Comprar
                                    </button>
                              </section>
                              <section className='col text-center'>
                                    <button onClick={() => clear()} className="btn-custom">
                                          Vacíar
                                    </button>
                              </section>
                        </section>
                  </>
            );
      };

      return (
            <div className="container">
                  <div className="row">
                        <div className="col">
                              { drawItemsCart() }
                        </div>
                        <div className="col-md-auto">
                              <h4 className='text-start'>Resumen</h4>
                              { drawResumenCart() }
                        </div>
                  </div>
            </div>
      );
}

export default ItemCartDetailContainer;