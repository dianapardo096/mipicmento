import React from 'react'; 
import menu from '../../img/menu.png';
import './Header.css'
import {Link} from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
<header id="box-header">
<div class="logo">
        <h1>Pigmento</h1>
    </div>
    <nav class="menu">
        <input type="checkbox" id="chk-menu"/>
        <label for="chk-menu" class="btn-menu">
        <img src={menu}/>
        </label>
            <li className="item"><Link to="/">Inicio</Link></li>
            <li className="item"><Link to="/galeria">Galeria</Link></li>
            <li className="item"><Link to="/productos">Productos</Link></li>
            <li className="item"><Link to="/talleres">Talleres</Link></li>
            <li className="item"><Link to="/login">Tu Cuenta</Link></li>              
            <li class="item"><input  type="text" placeholder="Buscar"/><FontAwesomeIcon icon={faMagnifyingGlass}/></li>
      
    </nav>
</header>
)
}
export default Header; 