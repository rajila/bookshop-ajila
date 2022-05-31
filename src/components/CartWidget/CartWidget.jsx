import './CartWidget.css';

const CartWidget = ({countItems = 0}) => {
      return (
            <>
                  <a id="carrito" href="#" title="Carrito Compras">
                        <img src="/assets/img/carrito-de-compras.png" alt="Icono carrito compra" /> 
                        &nbsp;<span className="count-items"><span className='color-yellow'>(</span>{countItems}<span className='color-yellow'>)</span></span>
                  </a>
            </>
      );
}

export default CartWidget;