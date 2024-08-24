import { useState } from 'react';
import { kintsugi_hub_backend } from 'declarations/kintsugi_hub_backend';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        {/* Add more routes for other pages */}
        <Route path='/' element ={<Home />} ></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
