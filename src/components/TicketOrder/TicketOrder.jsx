import MessageInfo from '../MessageInfo/MessageInfo';

import codigoQR from './img/qrcode.png';
import './TicketOrder.css';

const TicketOrder = ( { orderData = {} } ) => {
      return (
            <div className='container'>
                  <div className='ticket-order stamp'>
                        <h2>Book Shop</h2>
                        <div className='row'>
                              <div className='col'>Gran Vía 28013 Madrid</div>
                        </div>
                        <div className='row'>
                              <div className='col'>info@bookshop.es</div>
                        </div>
                        <hr />
                        <div className='row'>
                              <div className='col-auto text-start'><b>Ticket: </b>{ orderData.id }</div>
                        </div>
                        <div className='row'>
                              <div className='col-auto text-start'><b>Cliente: </b>{ orderData.buyer.name }</div>
                        </div>
                        <div className='row'>
                              <div className='col-auto text-start'><b>Fecha expedición: </b>{ (new Date(orderData.date)).toDateString() }</div>
                        </div>
                        <hr />
                        <table className="table table-striped1">
                              <thead>
                                    <tr>
                                          <th className='text-start' scope="col">Descripción</th>
                                          <th className='text-end' scope="col">PVP</th>
                                          <th className='text-end' scope="col">Cant</th>
                                          <th className='text-end' scope="col">Total</th>
                                    </tr>
                              </thead>
                              <tbody>
                        {
                              orderData.items.map(data => (
                                    <tr key={data.id}>
                                          <td className='text-start'>{data.title}</td>
                                          <td className='text-end'>{data.price} €</td>
                                          <td className='text-end'>{data.quantity}</td>
                                          <td className='text-end'>{Number((data.price*data.quantity).toFixed(2))} €</td>
                                    </tr>
                              ))
                        }
                        </tbody>
                        </table>
                        <hr />
                        <div className='row'>
                              <div className='col text-start'><b>Total:</b></div>
                              <div className='col-auto text-end'>{ orderData.total } €</div>
                        </div>
                        <hr />
                        <MessageInfo msn="Gracias por su compra." etiquetamsn="h6" colortext="success" icontype="smile" />
                        <img src={ codigoQR } alt={orderData.id} />
                  </div>
            </div>
      );
};

export default TicketOrder;