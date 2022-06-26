import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import { Spinner } from "react-bootstrap";

import { FirebaseCollections } from '../../helpers/FirebaseUtil'
import ResumeOrder from "../ResumeOrder/ResumeOrder";
import MessageInfo from '../MessageInfo/MessageInfo';

import { useCartContext } from "../../context/CartContext";
import { valideOrder } from "../../helpers/ValidateUtil";
import BookService from '../../services/FirebaseService';

import './Order.css';
import TicketOrder from '../TicketOrder/TicketOrder';
import TableCartOrder from './TableCartOrder';
import InformacionContacto from './InformacionContacto';

const Order = () => {
      const [buyer, setBuyer] = useState({name: '', email: '', remail:'', phone: ''});
      const [error, setError] = useState({});
      const [orderData, setOrderData] = useState(null);

      const refBtnComprar = useRef(null);
      const refSpinner = useRef(null);

      const { cart, getTotal, getQuantityCart, removeItem, clear, updateStock } = useCartContext();

      const deleteItem = (itemId) => {
            removeItem(itemId);
      };

      const eventChange = (e) => {
            e.persist();
            setBuyer((buyer) => ({ ...buyer, [e.target.name]: e.target.value }));
      };

      // Muestra/Oculta un elemento en base a su ultimo estado
      const changeClass = (el = undefined) => {
            if ( !el ) return;
            if ( el.classList.contains('visually-show') ) {
                  el.classList.remove('visually-show');
                  el.classList.add('visually-hidden');
            } else if ( el.classList.contains('visually-hidden') ) {
                  el.classList.remove('visually-hidden');
                  el.classList.add('visually-show');
            }
      };

      const eventSubmit = (e) => {
            e.preventDefault();
            const order = {
                  buyer: {...buyer},
                  items: cart.map(data => ( {id: data.id, title: data.title, price: data.price, quantity: data.quantity} )),
                  total: getTotal(),
                  date: Date.now()
            };

            const validationData = valideOrder({ buyer });
            
            changeClass(refBtnComprar.current);
            changeClass(refSpinner.current);
            
            if ( validationData.error ) {
                  setError({ ...validationData });
                  changeClass(refBtnComprar.current);
                  changeClass(refSpinner.current);
                  return;
            }
            
            delete order.buyer.remail;
            const { saveOrder } = BookService(FirebaseCollections.orders);
            saveOrder(order).then(resp => {
                  if ( !resp.iserror ) {
                        clear();
                        setOrderData( { ...order, id: resp.idorder} );
                  } else {
                        changeClass(refBtnComprar.current);
                        changeClass(refSpinner.current);
                        if ( resp.items ) {
                              updateStock( resp.items );
                              setError({...validationData, error : true, errorstock: 'Estimado cliente su cesta tiene productos SIN STOCK, por favor eliminarlos e la cesta'});
                        } else setError({...validationData, error : true, errorserver: 'Error al procesar su compra, por favor inténtelo más tarde.'});
                  }
            });
      };

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
                                          <TableCartOrder cart={cart} deleteItem={deleteItem} />
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