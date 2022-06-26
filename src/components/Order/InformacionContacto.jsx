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
                        <label htmlFor="name" className="form-label"><b>Nombres</b> <span className="text-danger">(<b>*</b>)</span></label>
                        <input {...setAttributesInput('name', 'text', error.name)} placeholder="Nombres completos" />
                        { drawErrorFeedback(error.name) }
                  </div>
                  <div className="text-start">
                        <label htmlFor="email" className="form-label"><b>Correo electrónico</b> <span className="text-danger">(<b>*</b>)</span></label>
                        <input {...setAttributesInput('email', 'email', error.email)} placeholder="example@example.com" />
                        { drawErrorFeedback(error.email) }
                  </div>
                  <div className="text-start">
                        <label htmlFor="remail" className="form-label"><b>Repita Correo electrónico</b> <span className="text-danger">(<b>*</b>)</span></label>
                        <input {...setAttributesInput('remail', 'email', error.remail)} placeholder="Repita su correo electrónico" />
                        { drawErrorFeedback(error.remail) }
                  </div>
                  <div className="text-start">
                        <label htmlFor="phone" className="form-label"><b>Teléfono</b> <span className="text-danger">(<b>*</b>)</span></label>
                        <input {...setAttributesInput('phone', 'text', error.phone)} placeholder="123456789" />
                        { drawErrorFeedback(error.phone) }
                  </div>
            </div>
      );
};

export default InformacionContacto;