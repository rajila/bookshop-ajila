import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import BookService from '../../services/BookService';

const ItemDetailContainer = () => {
      const [item, setItem] = useState({});
      const [loading, setLoading] = useState(true);

      const navigate = useNavigate();
      const { id } = useParams();

      const loadSpinner = () => {
            return (
                  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                  </Spinner>
            );
      };

      const actionAtras = () => {
            navigate(-1);
      }

      const loadItemDetail = () => {
            return(
                  <div className="container">
                        <p className='text-start'>
                              <span onClick={actionAtras} className='text-start btn-atras'>
                                    <img src="/assets/img/iconos/atras.png" alt="Icono carrito compra" /> Atr&aacute;s
                              </span>
                        </p>
                        <ItemDetail item={item} />
                  </div>
            );
      }

      useEffect(() => {
            const { getItem } = BookService();
            setLoading(true);
            getItem(Number(id)).then(data => {
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