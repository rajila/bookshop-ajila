import { dataBook } from '../helpers/BookUtil';

const BookService = () => {
      const getAllBooks = () => {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        resolve(dataBook);
                  }, 2000);
            });
      }

      return { getAllBooks };
}

export default BookService;