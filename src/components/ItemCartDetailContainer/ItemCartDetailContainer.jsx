import { Link } from 'react-router-dom';

import ItemCartDetail from "../ItemCartDetail/ItemCartDetail";
import ResumeOrder from "../ResumeOrder/ResumeOrder";

import './ItemCartDetailContainer.css';

const ItemCartDetailContainer = ({ cart, removeItem, getTotal, clear, getQuantityCart }) => {
      const onRemoveItemCart = (id, title) => {
            removeItem(id);
      };

      const drawItemsCart = () => {
            return cart.map((item, index) => {
                  return (
                        <div key={item.id}>
                              <ItemCartDetail item={item} onRemoveItemCart={onRemoveItemCart} />
                              { (cart.length - 1 === index) || <hr /> }
                        </div>
                  );
            });
      };

      const drawResumenCart = () => {
            return(
                  <>
                        <ResumeOrder title="Resumen" total={ getTotal() } quantitycart={getQuantityCart()}>
                              <section className='row'>
                                    <section className='col text-center btn-content-resume'>
                                          <Link to={"/order"}>
                                                <button className="btn-custom">Tramitar pedido</button>
                                          </Link>
                                          <button onClick={() => clear()} className="btn-custom">
                                                Vacíar
                                          </button>
                                    </section>
                              </section>
                        </ResumeOrder>
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
                              { drawResumenCart() }
                        </div>
                  </div>
            </div>
      );
}

export default ItemCartDetailContainer;