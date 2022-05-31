import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


const ItemListContainer = ({title, description, onAdd}) => {
      return (
            <div className="container content-item">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <ItemCount stock={5} initial={0} onAdd={onAdd} />
            </div>
      );
}

export default ItemListContainer;