import { useCartContext } from "../../context/CartContext";

const Cart = () => {
      const { getQuantityCart } = useCartContext();
      return (<h2>Cantidad total: {getQuantityCart()}</h2>);
}

export default Cart;