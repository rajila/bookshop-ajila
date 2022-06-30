import { Link } from 'react-router-dom';
import { Spinner } from "react-bootstrap";

import ResumeOrder from "../ResumeOrder/ResumeOrder";
import MessageInfo from '../MessageInfo/MessageInfo';

import './Order.css';
import TicketOrder from '../TicketOrder/TicketOrder';
import TableCartOrder from './TableCartOrder';
import InformacionContacto from './InformacionContacto';
import useOrder from '../../hooks/useOrder';

const Order = () => {
      const { 
                  error, 
                  orderData, 
                  deleteItem, 
                  eventChange, 
                  eventSubmit, 
                  cart, 
                  getQuantityCart, 
                  checkOutStockByItem, 
                  getTotal,
                  refBtnComprar,
                  refSpinner
      } = useOrder(); 
      
      const messageCartEmpty = () => {
            return (
                  <MessageInfo msn="Tu cesta está vacía">
                        <br />
                        <Link to={"/"}>
                              <button className="btn-custom">Ir a comprar</button>
                        </Link>
                  </MessageInfo>
            );
      };

      const drawLayoutOrder = () => {
            return (
                  <div className="container">
                        <form onSubmit={eventSubmit} className={"needs-validation " + ((error.error)?'was-validated':'')} noValidate>
                              <div className="row">
                                    <div className="col">
                                          { error.error && error.errorserver && <MessageInfo msn={error.errorserver} etiquetamsn="h6" />}
                                          <h5 className="text-start">Información de contacto</h5>
                                          <hr />
                                          <InformacionContacto error={error} eventChange={eventChange} />
                                          <br />
                                          <h5 className="text-start">Productos</h5>
                                          <hr />
                                          { error.error && error.errorstock && <MessageInfo msn={error.errorstock} etiquetamsn="h6" />}
                                          <TableCartOrder cart={cart} deleteItem={deleteItem} checkOutStockByItem={checkOutStockByItem} />
                                    </div>
                                    <div className="col-md-auto">
                                          <ResumeOrder title="Resumen" total={getTotal()} quantitycart={getQuantityCart()}>
                                                <section className='col text-center btn-content-resume'>
                                                      <Spinner ref={refSpinner} className='visually-hidden' animation="border" />
                                                      <button ref={refBtnComprar} className='btn-custom visually-show' type="submit">Comprar ahora</button>
                                                </section>
                                          </ResumeOrder>
                                    </div>
                              </div>
                        </form>
                  </div>
                        
            );
      };

      const drawTicketOrder = () => {
            return (
                  <div className='container'>
                        <TicketOrder orderData={orderData} />
                        <br />
                        <Link to={"/"}>
                              <button className="btn-custom">Ir a comprar</button>
                        </Link>
                  </div>
            );
      };

      return (
            <div>
                  <div className="container order-content">
                        <h1 className='text-start'>Tramitar pedido</h1>
                        <hr />
                        {
                              orderData ? drawTicketOrder() 
                                    :
                                    (     getQuantityCart() <= 0 ? messageCartEmpty() 
                                                                  : 
                                                                  drawLayoutOrder()
                                    )
                        }
                  </div>
            </div>
      );
};

export default Order;