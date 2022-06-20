import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.scss';
import NotFound from './pages/Error';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      
    </BrowserRouter>
  )
}

export default App;
