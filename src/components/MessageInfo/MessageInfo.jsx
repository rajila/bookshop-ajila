import { Alert } from "react-bootstrap";
import { BsEmojiFrown, BsEmojiSmile, BsEmojiSunglasses } from 'react-icons/bs';

import './MessageInfo.css';

const MessageInfo = ( { msn = 'No hay resultados que mostrar.', etiquetamsn='h4', colortext = 'danger', icontype='sad', children } ) => {
      const getIcon = () => {
            if ( icontype === 'sad' ) return <BsEmojiFrown />;
            else if ( icontype === 'smile' ) return <BsEmojiSmile />
            else return <BsEmojiSunglasses />
      };

      const getEtiqueta = () => {
            if ( etiquetamsn === 'h1' ) return <h1>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h1>;
            else if ( etiquetamsn === 'h2' ) return <h2>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h2>;
            else if ( etiquetamsn === 'h3' ) return <h3>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h3>;
            else if ( etiquetamsn === 'h4' ) return <h4>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h4>;
            else if ( etiquetamsn === 'h5' ) return <h5>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h5>;
            else return <h6>{ msn } {getIcon()} {getIcon()} {getIcon()}!!</h6>;
      };

      return (
            <>
                  <Alert className='fw-bold msn-data' key={colortext} variant={colortext}>
                        { getEtiqueta() }
                  </Alert>
                  { children }
            </>
      );
};

export default MessageInfo;