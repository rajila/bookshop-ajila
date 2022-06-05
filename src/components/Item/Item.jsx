import { Link } from "react-router-dom";

import './Item.css';

const Item = ({ item = {} }) => {
      const { id, title, stock, pictureUrl } = item;

      return (
            <div className="item">
                  <div className="card text-center">
                        <div className="card-header">
                              {title}
                        </div>
                        <div className="card-body">
                              <img src={`/assets/img/books/${pictureUrl}`} alt="Icono carrito compra" />
                              <Link to={`/libros/item/${id}`}>
                                    <button className='btn btn-outline-primary detalle'>Ver detalle</button>
                              </Link>
                        </div>
                        <div className="card-footer text-muted">
                              Stock disponible: {stock}
                        </div>
                  </div>
            </div>
      );

}

export default Item;