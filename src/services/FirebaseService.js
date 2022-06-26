import { addDoc, doc, getDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";

import { FirebaseCollections } from '../helpers/FirebaseUtil';
import FirebaseDB from '../firebase/FirebaseDB';

const BookService = (collectionName = FirebaseCollections.books) => {
      
      // Obtiene todos los registros de una Colección
      const getAllDocs = (collectionN = undefined) => {
            collectionN = collectionN || collectionName;
            return getDocs( collection(FirebaseDB, collectionN) )
                        .then( responseData => responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } )));
      };

      // Consulta un libro por id, si no lo encuentra devuelve vacio {}
      const getDocById = (id, collectionN = undefined) => {
            collectionN = collectionN || collectionName;
            return getDoc( doc(FirebaseDB, collectionN, id) )
                        .then(responseData => ((responseData.id) ? { id: responseData.id, ...responseData.data() } : {}));
      };

      // Obtiene los libros por categoria
      const getDocsByField = (fieldLabel, fieldValue, operador = '==', collectionN = undefined) => {
            collectionN = collectionN || collectionName;
            return getDocs( query(collection(FirebaseDB, collectionN), where(fieldLabel, operador, fieldValue)) )
                        .then(responseData => (responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } ))));
      };

      const getDocsByIds = (ids = [], collectionN = undefined) => {
            collectionN = collectionN || collectionName;
            if ( !(ids instanceof Array) ) return new Promise((resolve, reject) => resolve( { iserror: true } ));
            return getDocs( query(collection(FirebaseDB, collectionN), where(documentId(), 'in', ids)) )
                        .then(responseData => (responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } ))));
      };

      // Registra la orden de compra y actualiza el stock de los productos
      const saveOrder = (data = {}) => {
            if ( !data.buyer ) return new Promise((resolve, reject) => resolve({iserror: true, idorder: null}));
            return getDocs( query(collection(FirebaseDB, FirebaseCollections.books), where(documentId(), 'in', data.items.map(data => data.id))) )
                        .then(responseData => {
                              const batch = writeBatch(FirebaseDB);
                              const items = [];
                              responseData.docs.map(doc => {
                                    const itemCart = data.items.find(el => el.id === doc.id);
                                    const { stock, result = stock - itemCart.quantity} = doc.data();
                                    if ( result < 0 ) items.push( {id: doc.id, stock: stock} );
                                    batch.update(doc.ref, { stock: result }); // Actualiza el stock del item
                                    return 0;
                              });
                              
                              // Si existe un producto SIN STOCK, no se guarda la orden. Se envia un estado de ERROR
                              if (items.length !== 0) return { iserror: true, idorder: null, items: items };
                              
                              return addDoc(collection(FirebaseDB, collectionName), data)
                                          .then(( { id } ) => {
                                                batch.commit();
                                                return { iserror: false, idorder: id };
                                          });
                        });
      }

      return {  
                  getAllDocs,
                  getDocById,
                  getDocsByField,
                  saveOrder, 
                  getDocsByIds };
}

export default BookService;