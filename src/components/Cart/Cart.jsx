import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

import ItemCartDetailContainer from "../ItemCartDetailContainer/ItemCartDetailContainer";
import MessageInfo from '../MessageInfo/MessageInfo';

import './Cart.css';

const Cart = () => {
      const { cart, getQuantityCart, removeItem, getTotal, clear } = useCartContext();
      const dataCartContext = { cart, removeItem, getTotal, clear, getQuantityCart };

      const messageCartEmpty = () => {
            return (
                  <>
                        <MessageInfo msn="Tu cesta está vacía">
                              <br />
                              <Link to={"/"}>
                                    <button className="btn-custom">Ir a comprar</button>
                              </Link>
                        </MessageInfo>
                  </>
            );
      };

      return (
            <div className="container cart-content">
                  <h1 className="text-start">Cesta</h1>
                  <hr />
                  { getQuantityCart() <= 0 ? messageCartEmpty() : <ItemCartDetailContainer {...dataCartContext}  /> }
            </div>
      );
}

export default Cart;