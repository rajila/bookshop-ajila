import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Spinner, Alert } from "react-bootstrap";
import './ItemListContainer.css';

import BookService from '../../services/BookService';
import ItemList from '../ItemList/ItemList';

import { categoriesLabel } from '../../helpers/BookUtil';


const ItemListContainer = () => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
      
      const { id } = useParams();

      const loadSpinner = () => {
            return (
                  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                  </Spinner>
            );
      };
      
      useEffect(() => {
            const { getAllBooks, getItemByCategory } = BookService();
            const getItemsExecute = (id === null || id === undefined) ? getAllBooks() : getItemByCategory(id);
            setLoading(true);
            (getItemsExecute).then(data => {
                  setItems(data);
            }).catch(err => {
                  console.error('ERROR:',err);
            }).finally(() => {
                  setLoading(false);
            });
      }, [id]);

      return (
            <div className='item-container'>
                  <div className='header-content-item'>
                        <h1>Libros {(id === null || id === undefined) ? '' : ` de "${categoriesLabel[id] || id}"`}</h1>
                        <p className='frase-book'><q><span className='d-d'>El que ama la lectura, tiene todo a su alcance.</span></q> [William Godwim]</p>
                        <hr />
                  </div>
                  { loading ? loadSpinner() : ( (items.length === 0 ) ? <Alert className='fw-bold' key={'danger'} variant={'danger'}>No hay libros que mostrar!!</Alert>:<ItemList items={items} />) }
            </div>
      );
}

export default ItemListContainer;