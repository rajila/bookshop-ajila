import { dataBook } from '../helpers/BookUtil';

const BookService = () => {
      // Obtiene todos los libros
      const getAllBooks = () => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        resolve(dataBook);
                  }, 2000);
            });
      };

      // Consulta un libro por id, si no lo encuentra devuelve vacio {}
      const getItem = (id) => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        const item = dataBook.find(item => item.id === id) || {};
                        resolve(item);
                  }, 2000);
            });
      }

      return { getAllBooks, getItem };
}

export default BookService;