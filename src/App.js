import React from 'react';
import { BrowserRouter, MemoryRouter, Outlet } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import './styles/App.scss';
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
