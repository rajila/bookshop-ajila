import { useState, useContext, createContext } from "react";

const CartContext = createContext(); // Crea la variable de contexto

export const useCartContext = () => useContext(CartContext); // Crea el hook para usar el contexto

export const CartProvider = (props) => {
      const [cart, setCart] = useState([]); // Crea el state del carrito

      // Agrega un elemento si no existe, o le suma una cantidad si existe.
      const addItem = (item = {}, quantity = 0) => {
            if (item.id === undefined || quantity <= 0) return false;
            const itemIndex = cart.findIndex((el) => el.id === item.id); // Busca el item en el carrito
            setCart((cart) => {
                  ( itemIndex === -1 ) || ( cart[itemIndex].quantity += quantity );
                  return ( itemIndex === -1 ) ? [...cart, { ...item, quantity }] : [...cart];
            });
            return true;
      };

      // Remueve una unidad del item hasta que se quede sin unidades. Si la cantidad es 0, lo elimina del carrito.
      const removeItem = (itemId = undefined) => {
            const itemIndex = cart.findIndex((el) => el.id === itemId); // Busca el item en el carrito
            if (itemIndex === -1) return false;
            setCart((cart) => {
                  cart[itemIndex].quantity -= 1;
                  return (cart[itemIndex].quantity <= 0) ? [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)] : [...cart];
            });
            return true;
      };

      // Vacia el carrito
      const clear = () => {
            setCart([]);
            return true;
      };

      // Verifica si el item esta en el carrito
      const isInCart = (itemId) => {
            return cart.some(el => el.id === itemId); // Retorna true si el item esta en el carrito, false si no
      };

      // Retorna la cantidad total de items en el carrito (TEMPORAL)
      const getQuantityCart = () => {
            console.log('cart', cart);
            return cart.reduce((prevQuantity, el) => prevQuantity + el.quantity, 0);
      };

      // Retorna la cantidad de ejemplares de un item en el carrito
      const getQuantityByItem = (itemId) => {
            return ((cart.find(el => el.id === itemId) || {}).quantity) || 0;
      };

      return(
            <CartContext.Provider value={ 
                  {
                        cart, 
                        addItem, 
                        removeItem, 
                        clear, 
                        isInCart, 
                        getQuantityCart, 
                        getQuantityByItem
                  } 
            }>
                  { props.children }
            </CartContext.Provider>
      );
}