import './Footer.css';

const Footer = () => {
      return (
            <div id="footer" className="footer">
		      <div className="container">
                        Coder House - Madrid - España
                        <br />© {(new Date()).getFullYear()} El contenido de esta obra es de propiedad de Ronald. Todos los derechos reservados.
                  </div>
	    </div>
      );
}

export default Footer;