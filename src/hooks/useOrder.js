import { useEffect, useState, useRef } from "react";

import { FirebaseCollections } from '../helpers/FirebaseUtil';
import { useCartContext } from "../context/CartContext";
import { valideOrder } from "../helpers/ValidateUtil";
import FirebaseService from '../services/FirebaseService';

import { cartStorage } from '../helpers/StorageUtil';

const useOrder = () => {
      const [buyer, setBuyer] = useState({name: '', email: '', remail:'', phone: ''});
      const [error, setError] = useState({});
      const [orderData, setOrderData] = useState(null);

      const refBtnComprar = useRef(null);
      const refSpinner = useRef(null);

      const { cart, updateCartFromStorage, getTotal, getQuantityCart, removeItem, clear, updateStock, checkOutStockByItem } = useCartContext();

      useEffect(() => {
            updateCartFromStorage();
      }, [updateCartFromStorage]);
      
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
                  items: cartStorage().map(data => ( {id: data.id, title: data.title, price: data.price, quantity: data.quantity} )),
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

            if ( order.items.length === 0 ) {
                  updateCartFromStorage();
                  setError({...validationData, error : true, errorstock: 'Su cesta está vacía'});
                  return;
            }
            
            delete order.buyer.remail;
            const { saveOrder } = FirebaseService(FirebaseCollections.orders);
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

      return {
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
            };
};

export default useOrder;