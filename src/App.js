import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App