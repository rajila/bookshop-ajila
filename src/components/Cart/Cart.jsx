import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import { BsEmojiFrown } from 'react-icons/bs';

import ItemCartDetailContainer from "../ItemCartDetailContainer/ItemCartDetailContainer";

import './Cart.css';

const Cart = () => {
      const { cart, getQuantityCart, removeItem, getTotal, clear } = useCartContext();
      const dataCartContext = { cart, removeItem, getTotal, clear };

      const messageCartEmpty = () => {
            return (
                  <>
                        <h4>Tu cesta está vacía <BsEmojiFrown /> <BsEmojiFrown /> <BsEmojiFrown /> !!</h4>
                        <br />
                        <Link to={"/"}>
                              <button className="btn-custom">Ir a comprar</button>
                        </Link>
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