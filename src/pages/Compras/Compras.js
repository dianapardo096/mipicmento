import React, { useState } from 'react';
import './Compras.css';
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer";
import ItemCount from '../../componentes/ItemCount/ItemCount';
import Lienzo from '../../img/lienzoscaballete_18.png';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function Compras(count) {
//funciones del contador
    const onAdd = (quantity) => {
        console.log('Compraste ' + quantity + ' unidades');
        const price = quantity * 18000;
        /*alert('Total Parcial $' + price);*/
    }

const [num, setNum]=useState(count);           
const num1 = ()=> setNum (count*18000);



//hooks del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header />
            <body>
                <div class="principal">
                    <div class="mycart">
                        <h1>Mi Carrito</h1>
                    </div>
                    <div class="product">

                        <div class="image">
                            <img src={Lienzo} />
                        </div>

                        <div class="description">
                            <div class="description_name">
                                <h2>Lienzo con caballete</h2>
                            </div>
                            <div class="description_edit_cancel">
                                <div class="description_edit">
                                    <button className="btn-remov">Editar</button>
                                </div>
                                <div class="description_cancel">
                                    <button className="btn-remov" onClick={handleShow}>Remover</button>
                                </div>


                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>¿Esta seguro que desea eliminar este producto?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Lienzo con caballete <br/>
                                    <img src={Lienzo}  alig-items="center"/> 
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='btn-cancelar' onClick={handleClose} >
                                            Cancelar
                                        </button>
                                        <button className='btn-eliminar'><Link to='/dashboard' className='link'>
                                            Eliminar</Link>
                                        </button>
                                    </Modal.Footer>
                                </Modal>

                            </div>
                            <div class="description_price_unit">
                                <h3>Precio und.</h3>
                                <p>$18.000</p>
                            </div>
                            <div class="description_amount">
                                <h3>Cantidad</h3>
                                <ItemCount initial={1} stock={8} onAdd={onAdd} />
                            </div>
                            <div class="description_price_total">
                                <h3>Precio total</h3>
                                <p>$ {num1}</p>
                            </div>
                        </div>

                    </div>

                    <div class="summary">
                        <h2>Resumen del pedido</h2>

                        <div class="summary_subtotal">
                            <p>Total parcial</p>
                            <p>$18.000</p>
                        </div>
                        <div class="summary_envio">
                            <p>Envío</p>
                            <p>$4.000</p>
                        </div>
                        <div class="summary_total">
                            <p>Total</p>
                            <p>$22.000</p>
                        </div>
                        <div class="summary_boton_one">
                            <a href="index.html"><button>Seguir comprando</button></a>
                        </div>
                        <div class="summary_boton_two">
                            <a href="datos_envio.html"><button>Finalizar compra</button></a>
                        </div>

                    </div>

                    <div class="Notices">
                        <div class="NoticeShipping">

                        </div>
                    </div>


                </div>
            </body>
            <Footer />
        </div>
    );
}

export default Compras;