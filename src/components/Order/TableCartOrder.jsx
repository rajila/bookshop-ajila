import { BsTrashFill } from 'react-icons/bs';

const TableCartOrder = ( {cart, deleteItem} ) => {
      const getStatus = (stock = 0, quantity = 0) => {
            const result = stock - quantity;
            return (
                  result < 0 ? 
                        <span className='text-danger'><b>Sin stock</b> ({stock})</span>
                        :
                        <span className='text-success'><b>En stock</b></span>
            );
      };
      return (
            <div className='order-cart-content'>
                  <table className="table table-striped">
                        <thead>
                              <tr className='text-start'>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    cart.map(data =>
                                          (<tr className='text-start' key={data.id}>
                                                <td>{data.title}</td>
                                                <td>{data.quantity}</td>
                                                <td>{data.price} €</td>
                                                <td>{ getStatus(data.stock, data.quantity) }</td>
                                                <td className='text-end'><BsTrashFill className='delete-item-order' onClick={() => deleteItem(data.id)} /></td>
                                          </tr>)
                                    )
                              }
                        </tbody>
                  </table>
            </div>
      );
};

export default TableCartOrder;