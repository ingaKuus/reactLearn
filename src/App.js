import React, { useState } from 'react';
import { BrowserRouter, MemoryRouter, Outlet } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import './styles/App.scss';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
