import { useNavigate } from "react-router-dom";

const GoBack = () => {
      const navigate = useNavigate();

      const actionAtras = () => {
            navigate(-1);
      };

      return (
            <p className='text-start'>
                  <span onClick={actionAtras} className='text-start btn-atras'>
                        <img src="/assets/img/iconos/atras.png" alt="Atrás" /> Atr&aacute;s
                  </span>
            </p>
      );
};

export default GoBack;