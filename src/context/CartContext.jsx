import { useState, useContext, createContext, useEffect, useCallback } from "react";
import { cartStorage, updateCart } from "../helpers/StorageUtil";

const CartContext = createContext(); // Crea la variable de contexto

export const useCartContext = () => useContext(CartContext); // Crea el hook para usar el contexto

export const CartProvider = (props) => {
      const [cart, setCart] = useState(cartStorage()); // Crea el state del carrito

      useEffect( () => {
            updateCart(cart);
      }, [cart]);

      const updateCartFromStorage = useCallback(() => {
            setCart(cartStorage());
      }, []);

      // Agrega un elemento si no existe, o le suma una cantidad si existe.
      const addItem = (item = {}, quantity = 0) => {
            setCart(cartStorage());
            if (item.id === undefined || quantity <= 0) return false;
            const itemIndex = cart.findIndex((el) => el.id === item.id); // Busca el item en el carrito
            setCart((cart) => {
                  ( itemIndex === -1 ) || ( cart[itemIndex].quantity += quantity );
                  return ( itemIndex === -1 ) ? [...cart, { ...item, quantity }] : [...cart];
            });
            return true;
      };

      // Remueve una unidad del item hasta que se quede sin unidades. Si la cantidad es 0, lo elimina del carrito.cart
      const removeItem = (itemId = undefined) => {
            setCart(cartStorage());
            // Elimina el item del carrito, sin importar la cantidad. REGLAS DEL DESAFIO
            setCart((cart) => {
                  return cart.filter((el) => el.id !== itemId);
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

      // Retorna la cantidad total de items en el carrito
      const getQuantityCart = () => {
            return cart.reduce((prevQuantity, el) => prevQuantity + el.quantity, 0);
      };

      // Retorna la cantidad de ejemplares de un item en el carrito
      const getQuantityByItem = (itemId) => {
            return ((cart.find(el => el.id === itemId) || {}).quantity) || 0;
      };

      // Retorna el total del carrito de compra
      const getTotal = () => {
            return Number((cart.reduce((prevTotal, el) => prevTotal + (el.price * el.quantity), 0)).toFixed(2));
      };

      // Actualiza el stock de los productos, previamente pasado por la firma del metodo
      const updateStock = (dataUpdate = []) => {
            setCart(cartStorage());
            if ( !(dataUpdate instanceof Array && dataUpdate.length !== 0) ) return false;
            setCart((cart) => {
                  dataUpdate.forEach( data => {
                        const itemIndex = cart.findIndex(el => el.id === data.id);
                        if (itemIndex !== -1) cart[itemIndex].stock = data.stock;
                  });
                  return [ ...cart ];
            });
            return true;
      };

      // Verfica si hay stock disponible. False -> No hay stock, True -> Si hay stock
      const checkOutStockByItem = (itemId) => {
            const { stock, quantity } = cart.find(el => el.id === itemId) || {};
            return stock ? (stock - quantity) >= 0 : false;
      };

      return(
            <CartContext.Provider value={ 
                  {
                        cart, 
                        updateCartFromStorage,
                        addItem, 
                        removeItem, 
                        clear, 
                        isInCart, 
                        getQuantityCart, 
                        getQuantityByItem,
                        getTotal,
                        updateStock,
                        checkOutStockByItem
                  } 
            }>
                  { props.children }
            </CartContext.Provider>
      );
}