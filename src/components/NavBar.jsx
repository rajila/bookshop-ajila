import './NavBar.css';

const NavBar = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div id="container-nav" className="container-fluid">
                    <div className="container head-title">
                        <section className="head-title-1">
                            {/* <a className="navbar-brand" href="#">Book Shop</a> */}
                            {/* Titulo de la tienda */}
                            <h1>Book Shop</h1>
                            <button className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </section>
                        <section className="head-title-2">
                            {/* Tipo de usuario invitado */}
                            <b>[</b> Invitado <b>]</b>
                        </section>
                    </div>
                    <hr id="sep-nav" className="sep-nav" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container barra-menu">
                            {/* Menu principal de la tienda */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Libros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                            {/* Carrito de compras */}
                            <ul className="navbar-nav user pull-right">
	                            <li className="dropdown menu">
		                            <a id="carrito" href="#" title="Carrito Compras">
                                        <img src="/assets/img/carrito-de-compras.png" alt="Icono carrito compra" />
                                    </a>
	                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
