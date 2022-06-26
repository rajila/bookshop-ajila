import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import './ItemListContainer.css';

// Call services
import BookService from '../../services/FirebaseService';

import ItemList from '../ItemList/ItemList';

import MessageInfo from '../MessageInfo/MessageInfo';
import { FirebaseCollections } from '../../helpers/FirebaseUtil';


const ItemListContainer = () => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
      const [category, setCategory] = useState({});
      
      const { id } = useParams();

      const loadSpinner = () => {
            return (
                  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                  </Spinner>
            );
      };
      
      useEffect(() => {
            const { getAllDocs, getDocsByField } = BookService();
            const getItemsExecute = (id === null || id === undefined) ? 
                                          getAllDocs() 
                                          : 
                                          getDocsByField('key', id, '==', FirebaseCollections.categories)
                                                .then(resp => ( { ...resp[0] } ))
                                                .then(category => {
                                                      if ( category.id ) setCategory(category);
                                                      return getDocsByField('categoryId', category.id || '', '==');
                                                });
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
                        <h1>Libros {(id === null || id === undefined) ? '' : ` de "${category.description || id}"`}</h1>
                        <p className='frase-book'><q><span className='d-d'>El que ama la lectura, tiene todo a su alcance.</span></q> [William Godwim]</p>
                        <hr />
                  </div>
                  { loading ? loadSpinner() : ( (items.length === 0 ) ? <MessageInfo msn="No hay libros que mostrar" /> : <ItemList items={items} />) }
            </div>
      );
}

export default ItemListContainer;