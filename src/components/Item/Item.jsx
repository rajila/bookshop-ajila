import { useNavigate } from "react-router-dom";

import './Item.css';

const Item = ({ item = {} }) => {
      const { id, title, stock, pictureUrl } = item;

      const navigate = useNavigate();

      // Implemetacion para eliminar el warning de 'Link' anidados.
      const goItem = (e) => {
            e.stopPropagation(); // Evita que se propague el evento al padre.
            navigate(`/item/${id}`);
      }

      return (
            <div className="item" onClick={goItem}>
                  <div className="card text-center">
                        <div className="card-header">
                              {title}
                        </div>
                        <div className="card-body">
                              <section>
                                    <img src={`/assets/img/books/${pictureUrl}`} alt={title} />
                              </section>
                              <section>
                                    <button onClick={goItem} className='btn btn-outline-primary detalle'>Ver detalle</button>
                              </section>
                        </div>
                        <div className="card-footer text-muted">
                              Stock disponible: {stock}
                        </div>
                  </div>
            </div>
      );
}

export default Item;