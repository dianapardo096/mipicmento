import './Header.css';
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){
    return(
        /*caracteristicas del componente*/
        <header id="box-header">
        <div className='logo'>
            <h1>Pigmento</h1>
        </div>
        <nav class="menu">
            <input type="checkbox" id="chk-menu"/>
            <label for="chk-menu" className='btn-menu'>
            <i className='fa-solid fa-bars'></i>
            </label>
            <li className="item"><Link to="/">Inicio</Link></li>
            <li className="item"><Link to="/galeria">Galeria</Link></li>
            <li className="item"><Link to="/productos">Productos</Link></li>
            <li className="item"><Link to="/talleres">Talleres</Link></li>
            <li className="item"><Link to="/login">Tu Cuenta</Link></li>
                
            <li class="item"  icon={faMagnifyingGlass}><input  type="text" placeholder="Buscar"/></li>
          
        </nav>
        </header>
            );
}

export default Header;