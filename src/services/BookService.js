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
      };

      // Obtiene los libros por categoria
      const getItemByCategory = (category) => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        const items = dataBook.filter(item => item.category === category);
                        resolve(items);
                  }, 2000);
            });
      }

      return { getAllBooks, getItem, getItemByCategory };
}

export default BookService;