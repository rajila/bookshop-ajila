const errorOrderDefault = {
      error: true,
      name: 'Ingresar nombres completos',
      email: 'Ingresar correo electrónico',
      remail: 'Ingresar correo electrónico',
      phone: 'Ingresar teléfono'
};

const ValidateUtil =  {
      // Valida el formulario de Informacion de contacto: Orden de compra
      valideOrder: (data = {}) => {
            if ( !(data instanceof Object) ) return errorOrderDefault;
            if ( !data.buyer ) return { ...errorOrderDefault };

            let errorData = { error: false };
            const { name, email, remail, phone } = data.buyer;

            // Validación campo NOMBRE
            if ( !name ) errorData = { ...errorData, error: true, name: errorOrderDefault.name };
            else if ( name.trim().length < 10 ) errorData = { ...errorData, error: true, name: 'Debe ingresar al menos 10 caracteres.' };
            else if ( name.trim().length > 100 ) errorData = { ...errorData, error: true, name: 'Solo se permite como máximo 100 caracteres.' };

            // Validación campo EMAIL
            if ( !email ) errorData = { ...errorData, error: true, email: errorOrderDefault.email };
            else if ( !ValidateUtil.checkEmail(email) ) errorData = { ...errorData, error: true, email: 'El correo electrónico no es válido. Ejemplo: example@example.com' };

             // Validación campo REPITE EMAIL
            if ( !remail ) errorData = { ...errorData, error: true, remail: errorOrderDefault.remail };
            else if ( !ValidateUtil.checkEmail(remail) ) errorData = { ...errorData, error: true, remail: 'El correo electrónico no es válido. Ejemplo: example@example.com' };
            else if ( email.trim() !== remail.trim() ) errorData = { ...errorData, error: true, remail: 'Los correos electrónicos no son iguales.' };

            // Validación campo PHONE
            if ( !phone ) errorData = { ...errorData, error: true, phone: errorOrderDefault.phone };
            else if ( !(/^\d{9}$/.test(phone)) ) errorData = { ...errorData, error: true, phone: 'El teléfono debe tener 9 dígitos. Formato: 000000000' };

            return errorData;
      },

      checkEmail: (inputData = '') => {
            return /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(inputData);
      }
};

export const valideOrder = ValidateUtil.valideOrder;