import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

// Call services
import BookService from '../../services/FirebaseService';
import GoBack from '../GoBack/GoBack';

const ItemDetailContainer = () => {
      const [item, setItem] = useState({});
      const [loading, setLoading] = useState(true);

      const { id } = useParams();

      const loadSpinner = () => {
            return (
                  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                  </Spinner>
            );
      };

      const loadItemDetail = () => {
            return(
                  <div className="container">
                        <GoBack />
                        <ItemDetail item={item} />
                  </div>
            );
      }

      useEffect(() => {
            const { getDocById } = BookService();
            setLoading(true);
            getDocById(id).then(data => {
                  setItem(data);
            }).catch(err => {
                  console.error('ERROR:',err);
            }).finally(() => {
                  setLoading(false);
            });
      }, [id]);

      return (
            <>
                  { loading ? loadSpinner() : loadItemDetail() }
            </>
      );
}

export default ItemDetailContainer;