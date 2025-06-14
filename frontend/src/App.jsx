import './App.css'
import Navbar from './components/NavBar'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';


function App() {
  

  return (
    <>
    <Router>
    <AppRoutes/>    
    </Router>    
    </>
    
  )
}

export default App