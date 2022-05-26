import './ItemListContainer.css';

const ItemListContainer = ({title, description}) => {
      return (
            <div className="container content-item">
                  <h2>{title}</h2>
                  <p>{description}</p>
            </div>
      );
}

export default ItemListContainer;