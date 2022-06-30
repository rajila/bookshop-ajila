import { addDoc, doc, getDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";

import { FirebaseCollections } from '../helpers/FirebaseUtil';
import FirebaseDB from '../firebase/FirebaseDB';

const FirebaseService = (collectionDefault = FirebaseCollections.books) => {
      
      // Obtiene todos los documentos de una Colección
      const getAllDocs = (collectionIn = undefined) => {
            collectionIn = collectionIn || collectionDefault;
            return getDocs( collection(FirebaseDB, collectionIn) )
                        .then( responseData => responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } )));
      };

      // Consulta un documento por id, si no lo encuentra devuelve vacio {}
      const getDocById = (id, collectionIn = undefined) => {
            collectionIn = collectionIn || collectionDefault;
            return getDoc( doc(FirebaseDB, collectionIn, id) )
                        .then(responseData => ((responseData.id) ? { id: responseData.id, ...responseData.data() } : {}));
      };

      // Obtiene los documentos por field
      const getDocsByField = (fieldLabel, fieldValue, operador = '==', collectionIn = undefined) => {
            collectionIn = collectionIn || collectionDefault;
            return getDocs( query(collection(FirebaseDB, collectionIn), where(fieldLabel, operador, fieldValue)) )
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
                              
                              return addDoc(collection(FirebaseDB, collectionDefault), data)
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
                  saveOrder
            };
}

export default FirebaseService;