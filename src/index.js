import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Swal from 'sweetalert2';
import Home from './pages/Home/Home';
import Galeria from './pages/Galeria/Galeria';
import Productos from './pages/Productos/Productos';
import Talleres from './pages/Talleres/Talleres';
import FormLogin from './pages/FormLogin/FormLogin';
import RCompra from './pages/RCompras/RCompra';
import Dashboard from './pages/Dashboard/Dashboard';
import Cvacio from './pages/CVacio/CVacio';
import Compra from './pages/Compras/Compra';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/galeria' element={<Galeria/>}> </Route>
      <Route path='/productos' element={<Productos/>}> </Route>
      <Route path='/talleres' element={<Talleres/>}> </Route>
      <Route path='/login' element={<FormLogin/>}> </Route>
      <Route path='/resucompra' element={<RCompra/>}> </Route>
      <Route path='/dashboard' element={<Dashboard/>}> </Route>
      <Route path='/vacio' element={<Cvacio/>}> </Route>
      <Route path='/carrito' element={<Compra/>}> </Route>
  </Routes>
</BrowserRouter>
   
);