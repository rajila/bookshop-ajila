import './Item.css';

const Item = ({ item = {} }) => {
      const { title, stock, pictureUrl } = item;

      const showDetalle = () => {
            alert("En desarrollo!!!");
      }

      return (
            <div className="item">
                  <div className="card text-center">
                        <div className="card-header">
                              {title}
                        </div>
                        <div className="card-body">
                              <img src={`/assets/img/books/${pictureUrl}`} alt="Icono carrito compra" />
                              <button className='btn btn-outline-primary detalle' onClick={showDetalle}>Ver detalle</button>
                        </div>
                        <div className="card-footer text-muted">
                              Stock disponible: {stock}
                        </div>
                  </div>
            </div>
      );

}

export default Item;