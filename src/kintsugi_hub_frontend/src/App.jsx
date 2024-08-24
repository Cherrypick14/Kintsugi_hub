import { useState } from 'react';
import { kintsugi_hub_backend } from 'declarations/kintsugi_hub_backend';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StatisticsSection from './pages/Statistics';
import Form from './pages/Form';

function App() {

  return (
    <Router>
      <Routes>
        {/* Add more routes for other pages */}
        <Route path='/' element ={<Home />} />
        <Route path="/statistics" element={<StatisticsSection />} />
        <Route path='/form' element={<Form />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
