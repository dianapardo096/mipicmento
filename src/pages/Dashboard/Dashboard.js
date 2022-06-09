import React from "react";
import './Dashboard.css';
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <div>       
        <Header/>
        <body>
    <div className="principal">

        <div className="title">
            <h1>Mi cuenta</h1>
        </div>
        <div className="sidebar">
            <ul>
            <li><Link to="/dashboard" className='item'><FontAwesomeIcon icon={faUser} className='item'/> Mi perfil </Link></li>
                <li><Link to="/compras" className='item'> <FontAwesomeIcon icon={faCartShopping} className='item'/>  Mi Carrito </Link></li>
            </ul> 
        </div> 
        <article className="user">
            <div className="user_title">
                <h2>Datos de usuario</h2>
            </div>
            <div className="user_information">
                <div className="user_information_name">
                    <h3>Nombre:</h3>
                    <p>Maria Paula Sanchez Avila</p>
                </div>
                <div className="user_information_email">
                    <h3>Correo:</h3>
                    <p>mpsancheza@gmail.com</p>
                </div>
                <div className="user_information_adress">
                    <h3>Dirección</h3>
                    <p>Diagonal 82 #72a 55  Bogotá, Colombia</p>
                     <a href="">editar</a>
                </div>
                <div className="user_information_phone">
                    <h3>Número  de teléfono</h3>
                    <p>+57 3112582303</p> <a href="">editar</a>
                </div>
                <div className="user_information_editPassword">
                    <h3>Contraseña</h3>
                    <a href="">Cambiar contraseña</a>
                </div>

            </div>
        </article>

    </div>
</body>
        <Footer/>
        </div>
    );
}

export default Dashboard;