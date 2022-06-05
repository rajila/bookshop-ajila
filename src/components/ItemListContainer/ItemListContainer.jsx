import { useState, useEffect } from 'react';
import { Spinner } from "react-bootstrap";
import './ItemListContainer.css';

import BookService from '../../services/BookService';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({title, description, onAdd}) => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);

      const loadSpinner = () => {
            return (
                  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                  </Spinner>
            );
      }
      
      useEffect(() => {
            const { getAllBooks } = BookService();
            setLoading(true);
            getAllBooks().then(data => {
                  setItems(data);
            }).catch(err => {
                  console.error('ERROR:',err);
            }).finally(() => {
                  setLoading(false);
            });
      }, []);

      return (
            <div className="container content-item">
                  { loading ? loadSpinner() : <ItemList items={items} /> }
                  {/* <ItemCount stock={5} initial={0} onAdd={onAdd} /> */}
            </div>
      );
}

export default ItemListContainer;