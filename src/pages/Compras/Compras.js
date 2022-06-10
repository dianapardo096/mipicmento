import React from "react";
import './Compras.css';
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer";
import ItemCount from '../../componentes/ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function Compras() {

    const onAdd=(quantity) =>{
        console.log('Compraste '+ quantity +' unidades');
        const price= quantity*18000;
        alert('cuestan '+price);
    }

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
                            <img src="../../assets/images/subproductos/lienzos/lienzoscaballete_18.png" alt="" />
                        </div>

                        <div class="description">
                            <div class="description_name">
                                <h2>Nombre del producto</h2>
                            </div>
                            <div class="description_edit_cancel">
                                <div class="description_edit">
                                    <a href="">Editar</a>
                                </div>
                                <div class="description_cancel">
                                    <a href="#g-modal" class="cta">Remover</a>
                                </div>

                            </div>
                            <div class="description_price_unit">
                                <h3>Precio und.</h3>
                                <p>$18.000</p>
                            </div>
                            <div class="description_amount">
                                <h3>Cantidad</h3>
                                <ItemCount initial={1} stock={8} onAdd={onAdd}/>
                            </div>
                            <div class="description_price_total">
                                <h3>Precio total</h3>
                                <p>$18.000</p>
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