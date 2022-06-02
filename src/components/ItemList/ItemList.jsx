import './ItemList.css';
import Item from "../Item/Item";

const ItemList = ({ items = [] }) => {
      const drawItems = () => {
            return items.map(item => {
                  return <Item key={item.id} item={item} />;
            });
      }

      return (
            
            <div className="item-list">
                  { drawItems() }
            </div>
            
      );
}

export default ItemList;