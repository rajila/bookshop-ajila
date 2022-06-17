import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

import { useCartContext } from '../../context/CartContext';

import './CartWidget.css';

const CartWidget = () => {
      const { getQuantityCart } = useCartContext();

      const drawIcon = () => {
            return (
                  <>
                        <Link id='carrito' to={"/cart"}>
                              <BsCart2 size={'1.5em'} />
                        </Link>
                        <span className='count-items'>{getQuantityCart()}</span>
                  </>
            );
      }

      return (
            <section>
                  { (getQuantityCart() <= 0 ) || drawIcon() }
            </section>
      );
}

export default CartWidget;