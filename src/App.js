import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages 
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';

// CSS 
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/home' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
