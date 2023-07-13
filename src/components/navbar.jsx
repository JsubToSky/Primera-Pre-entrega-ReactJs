import React from "react";
import './Css/styles.css'




const Navbar = () => {
    return(
        <header className='header'>
            <nav classname="nav">
                <ul className="nav-list">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Musica</a></li>
                    <li><a href="">Nosotros</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar 