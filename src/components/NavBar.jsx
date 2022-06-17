import { Link } from 'react-router-dom';

import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div id="container-nav" className="container-fluid">
                    <div className="container head-title">
                        <section className="head-title-1">
                            {/* Titulo de la tienda */}
                            <h1><Link to={"/"}><span>Book Shop</span></Link></h1>
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
                                    <Link to={"/"} className="nav-link active" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/category/computacion"} className="nav-link active" aria-current="page">Computaci&oacute;n</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/category/matematicas"} className="nav-link active" aria-current="page">Matem&aacute;ticas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/category/medicina"} className="nav-link active" aria-current="page">Medicina</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav user pull-right">
	                            <li className="dropdown menu">
                                    {/* Carrito de compras */}
                                    <CartWidget />
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
