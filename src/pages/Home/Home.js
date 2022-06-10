import React from "react";
import "./Home.css";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer";
function Home(){
    return(
        <div>       
        <Header/>

        <body className="body">
            <h1>Para Revisar mis páginas, da click en el botón "Tu Cuenta" </h1>  

            <h7>Tuve alguns problemas para imprimir algunos textos</h7>  
        </body>  
        
        <Footer/>
        </div>
    );
}

export default Home;