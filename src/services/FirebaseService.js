import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

import { FirebaseCollections } from '../helpers/FirebaseUtil';
import FirebaseDB from '../firebase/FirebaseDB';

const BookService = (collectionName = FirebaseCollections.books) => {
      // Obtiene todos los libros
      const getAllBooks = () => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        getDocs( collection(FirebaseDB, collectionName) ).then(responseData => {
                              resolve(responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } )));
                        });
                  }, 1000);
                  
            });
      };

      // Consulta un libro por id, si no lo encuentra devuelve vacio {}
      const getItem = (id) => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        getDoc( doc(FirebaseDB, collectionName, id) ).then(responseData => {
                              resolve( (responseData.id) ? { id: responseData.id, ...responseData.data() } : {} );
                        });
                  }, 1000);
            });
      };

      // Obtiene los libros por categoria
      const getItemByCategory = (category) => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        getDocs( query(collection(FirebaseDB, collectionName), where('category', '==', category)) ).then(responseData => {
                              resolve(responseData.docs.map(doc => ( { id: doc.id, ...doc.data() } )));
                        });
                  }, 1000);
            });
      }

      return { getAllBooks, getItem, getItemByCategory };
}

export default BookService;