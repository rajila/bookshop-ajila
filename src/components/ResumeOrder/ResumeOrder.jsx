import './ResumeOrder.css';

const ResumeOrder = ({ title, total = 0, quantitycart = 0, children}) => {
      return (
            <div className="container content-resume">
                  <h5 className='text-start'>{title}</h5>
                  <hr />
                  <section className='row'>
                        <section className='col'>
                              <h6 className='text-start'>Subtotal ({`${quantitycart} productos`})</h6>
                        </section>
                        <section className='col-auto text-end'>
                              <span>{ total } €</span>
                        </section>
                  </section>
                  <section className='row'>
                        <section className='col'>
                              <h6 className='text-start'>Gastos de envío y gestión&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                        </section>
                        <section className='col-auto text-end'>
                              <span>0.00 €</span>
                        </section>
                  </section>
                  <hr />
                  <section className='row'>
                        <section className='col'>
                              <h6 className='text-start'>Total</h6>
                        </section>
                        <section className='col-auto text-end'>
                              <span><b>{ total } €</b></span>
                        </section>
                  </section>
                  <hr />
                  { children }
            </div>
      );
};

export default ResumeOrder;