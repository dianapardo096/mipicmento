import React, {useState}from 'react';
import './FormLogin.css';
import{Formulario, H2,IconoUsuario,BotonInicio,Boton, MensajeError,MensajeExito, Boton2} from'../../Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import CompInput from '../../componentes/input/input';
import { Link } from 'react-router-dom';


function FormLogin ()  {
  //para validación
  const[usuario,cambiarUsuario]= useState({campo:'', valido: null});
  const[password,cambiarPassword]= useState({campo:'', valido: null});
  const[formularioValido,cambiarFormularioValido]= useState(null);



  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onSubmit= (event) => {
    event.preventDefault();

    if(usuario.valido==='true'&& password.valido==='true'){
      cambiarFormularioValido(true)
      cambiarUsuario({campo:'', valido:null});
      cambiarPassword({campo:'', valido:null});
    }else{
      cambiarFormularioValido(false)

    }


  }


  return (
    <main className= 'login-fondo'>
      <Formulario action='' onSubmit={onSubmit}>
        <IconoUsuario icon={faPaintbrush}/>
        <H2>Inicio de sesión</H2>
        <h3>Continua en el boton de dashboard</h3>
        <CompInput
        estado={usuario}
        cambiarEstado={cambiarUsuario}

        tipo="mail"
        placeholder="ingrese su email"
        name="usuario"
        leyendaError="Su usuario es su correo electrónico"
        expresionRegular={expresiones.correo}
        />

        <CompInput
        estado={password}
        cambiarEstado={cambiarPassword}

        tipo="password"
        placeholder="ingrese su contraseña"
        name="contraseña"
        leyendaError="Contraseña debe ser superior a 4 digitos"
        expresionRegular={expresiones.password}
        />

      { formularioValido===false &&  < MensajeError>
          <p> 
            <FontAwesomeIcon icon={faExclamationTriangle }/>
              Usa cualquier correo y contraseña para validar
          </p>
        </ MensajeError>}
        <BotonInicio>
          <Boton type='submit'>Ingresar</Boton>

          { formularioValido &&  < MensajeExito>
          <p> 
            ¡Bienvenido!
          </p>
        </ MensajeExito>} 

        </BotonInicio>
        <BotonInicio>
         
        <Boton2 type='submit'><Link to="/dashboard" className='link'>Dashboard</Link></Boton2>
          <a>Este es un login provisional para ingresar a mis paginas.<br/> El botón "ingresar" si tiene validaciones</a>
        </BotonInicio>
      </Formulario>
    </main>
  );
}

export default FormLogin;