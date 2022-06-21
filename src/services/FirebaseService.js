import { addDoc, doc, getDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";

import { FirebaseCollections } from '../helpers/FirebaseUtil';
import FirebaseDB from '../firebase/FirebaseDB';

const BookService = (collectionName = FirebaseCollections.books) => {
      // Obtiene todos los libros
      const getAllBooks = () => {
            return getDocs( collection(FirebaseDB, collectionName) )
                        .then( responseData => responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } )));
      };

      // Consulta un libro por id, si no lo encuentra devuelve vacio {}
      const getItem = (id) => {
            return getDoc( doc(FirebaseDB, collectionName, id) )
                        .then(responseData => ((responseData.id) ? { id: responseData.id, ...responseData.data() } : {}));
      };

      // Obtiene los libros por categoria
      const getItemByCategory = (category) => {
            return getDocs( query(collection(FirebaseDB, collectionName), where('category', '==', category)) )
                        .then(responseData => (responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } ))));
      }

      // Registra la orden de compra y actualiza el stock de los productos
      const saveOrder = (data = {}) => {
            if ( !data.buyer ) return new Promise((resolve, reject) => resolve({iserror: true, idorder: null}));
            return getDocs( query(collection(FirebaseDB, FirebaseCollections.books), where(documentId(), 'in', data.items.map(data => data.id))) )
                        .then(responseData => {
                              const batch = writeBatch(FirebaseDB);
                              responseData.docs.map(doc => {
                                    const itemCart = data.items.find(el => el.id === doc.id);
                                    const { stock } = doc.data();
                                    batch.update(doc.ref, { stock: stock - itemCart.quantity });
                                    return 0;
                              });
                              return addDoc(collection(FirebaseDB, collectionName), data)
                                          .then(( { id } ) => {
                                                batch.commit();
                                                return { iserror: false, idorder: id };
                                          });
                        });
      }

      return { getAllBooks, getItem, getItemByCategory, saveOrder };
}

export default BookService;