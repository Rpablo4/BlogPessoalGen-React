import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/Footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/login/Login';
import { Typography } from '@material-ui/core';
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import ListaPostagem from './components/static/postagens/listaPostagens/listaPostagem';
import ListaTema from './components/static/temas/listaTemas/listaTema';
import CadastroPost from './components/static/postagens/cadastroPost/CadastroPost';
import DeletarTema from './components/static/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/static/postagens/deletePost/DeletePost';
import CadastrarTema from './components/static/temas/cadastrarTema/CadastrarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>

            <Route path="/" element={<Login />} />



            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastrarTema />} />

            <Route path="/formularioTema/:id" element={<CadastrarTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />


          </Routes>
        </div>
        <Footer />

      </Router>
      
    </Provider>

  );
}

export default App;