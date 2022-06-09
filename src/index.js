import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Galeria from './pages/Galeria/Galeria';
import Productos from './pages/Productos/Productos';
import Talleres from './pages/Talleres/Talleres';
import FormLogin from './pages/FormLogin/FormLogin';
import Compras from './pages/Compras/Compras';
import Dashboard from './pages/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/galeria' element={<Galeria/>}> </Route>
      <Route path='/productos' element={<Productos/>}> </Route>
      <Route path='/talleres' element={<Talleres/>}> </Route>
      <Route path='/login' element={<FormLogin/>}> </Route>
      <Route path='/compras' element={<Compras/>}> </Route>
      <Route path='/dashboard' element={<Dashboard/>}> </Route>
  </Routes>
</BrowserRouter>
   
);