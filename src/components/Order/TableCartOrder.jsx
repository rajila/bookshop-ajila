import { BsTrashFill } from 'react-icons/bs';

const TableCartOrder = ( {cart, deleteItem} ) => {
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
                                                <td>En stock</td>
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