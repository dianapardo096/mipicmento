import React from 'react'; 
import './Footer.css';
import Linea from '../img/Line 1.svg';
import Bandera from '../img/bandera.svg';
import { Link } from 'react-router-dom';

function Footer(){
    return(
<footer>
        <section class="footer-op">
        <img src={Linea}/>

            <section id="footer-con-info">
                <article class="footer-info">
                    <div className='t-fo-1'>
                    <img src={require("../img/user-account-solid-24.png")}/>
                        <h2 class="footer-title">CUENTA</h2>
                        </div>
                    <ul>
                        <li><Link to="/login" className='link'>Mi Cuenta</Link></li>
                        <li><a href="#">Registrate</a></li>
                        <li>Busqueda</li>
                    </ul>
                </article>

                <article class="footer-info">
                <div className='t-fo-1'>
                <img src={require("../img/mail-send-regular-24.png")}/>
                    <h2 class="footer-title">ENVIOS</h2>
                    
                </div>
                    <ul>
                        <li>Bogota</li>
                        <li>Pereira</li>
                        <li>Medellin</li>
                    </ul>
                </article>
                <article class="footer-info">
                <div className='t-fo-1'>
                <img src={require("../img/contact-solid-24.png")}/>
                    <h2 class="footer-title">CONTACTO</h2>
                </div>
                    <div class="footer-contact-sm">

                        <p>+57 310 562 31 20</p>
                        <p>+57 305 767 60 63</p>
                        <p>emprearte@gmail.com</p>
                        <div className='iconos'>
                            <img src={require("../img/facebook-circle-logo-24.png")}/>
                            <img src={require("../img/pinterest-alt-logo-24.png")}/>
                            <img src={require("../img/instagram-alt-logo-24.png")}/>
                        </div>
                    </div>
                </article>
                <article class="footer-info">
                <div className='t-fo-1'> <h2 class="footer-title">CONTACTANOS</h2></div>
                    <form id="footer-form">
                        <input class="footer-form-input" type="email" placeholder="correo electronico" />
                        <textarea class="texta" name="mensaje" placeholder="Escribe aqui tu mensaje"></textarea><br/>
                        <input class="btn-enviar" type="submit" value="Enviar"/>
                    </form>
                </article>
            </section>
            <img src={Bandera}/>
        </section>
</footer>
    )
}
export default Footer;