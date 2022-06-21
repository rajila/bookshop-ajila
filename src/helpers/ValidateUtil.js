const errorOrderDefault = {
      error: true,
      name: 'Ingresar nombres completos',
      email: 'Ingresar correo electrónico',
      phone: 'Ingresar teléfono'
};

const ValidateUtil =  {
      valideOrder: (data = {}) => {
            if ( !(data instanceof Object) ) return errorOrderDefault;
            if ( !data.buyer ) return { ...errorOrderDefault };

            let errorData = { error: false };
            const { name, email, phone } = data.buyer;

            // Validación campo NOMBRE
            if ( !name ) errorData = { ...errorData, error: true, name: errorOrderDefault.name };
            else if ( name.trim().length < 10 ) errorData = { ...errorData, error: true, name: 'Debe ingresar al menos 10 caracteres.' };
            else if ( name.trim().length > 100 ) errorData = { ...errorData, error: true, name: 'Solo se permite como máximo 100 caracteres.' };

            // Validación campo EMAIL
            if ( !email ) errorData = { ...errorData, error: true, email: errorOrderDefault.email };
            else if ( !(/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)) ) errorData = { ...errorData, error: true, email: 'El correo electrónico no es válido. Ejemplo: example@example.com' };

            // Validación campo PHONE
            if ( !phone ) errorData = { ...errorData, error: true, phone: errorOrderDefault.phone };
            else if ( !(/^\d{9}$/.test(phone)) ) errorData = { ...errorData, error: true, phone: 'El teléfono debe tener 9 dígitos. Formato: 000000000' };

            return errorData;
      }
};

export const valideOrder = ValidateUtil.valideOrder;