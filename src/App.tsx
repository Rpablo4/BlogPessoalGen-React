import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/Footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/login/Login';
import { Typography } from '@material-ui/core';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;