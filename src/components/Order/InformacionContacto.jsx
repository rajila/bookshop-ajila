const InformacionContacto = ( { error, eventChange } ) => {
      const setAttributesInput = (nameIn, typeIn, msnError = undefined) => {
            return {
                  onChange: eventChange,
                  autoComplete: 'off', 
                  required: true,
                  id: nameIn,
                  name: nameIn,
                  type: typeIn,
                  className: `form-control ${ (error.error) ? ( (msnError) ? 'is-invalid' : 'is-valid' ) : '' }`
            };
      };

      const drawErrorFeedback = (msnError = undefined) => {
            return (<div className="invalid-feedback">{ msnError }</div>);
      };

      return (
            <div className="order-form-content">
                  <div className="text-start">
                        <label htmlFor="name" className="form-label fw-bold">Nombres</label>
                        <input {...setAttributesInput('name', 'text', error.name)} placeholder="Nombres completos" />
                        { drawErrorFeedback(error.name) }
                  </div>
                  <div className="text-start">
                        <label htmlFor="email" className="form-label fw-bold">Correo electrónico</label>
                        <input {...setAttributesInput('email', 'email', error.email)} placeholder="Ejemplo: example@example.com" />
                        { drawErrorFeedback(error.email) }
                  </div>
                  <div className="text-start">
                        <label htmlFor="phone" className="form-label fw-bold">Teléfono</label>
                        <input {...setAttributesInput('phone', 'text', error.phone)} placeholder="Ejemplo: 123456789" />
                        { drawErrorFeedback(error.phone) }
                  </div>
            </div>
      );
};

export default InformacionContacto;