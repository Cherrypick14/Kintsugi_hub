import { useState } from 'react';
import { kintsugi_hub_backend } from 'declarations/kintsugi_hub_backend';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StatisticsSection from './pages/Statistics';
import Form from './pages/Form';
import Login from './pages/Login';
// import ProtectedRoute from './components/Protectedroute';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (
    <Router>
      <Routes>
        {/* Add more routes for other pages */}
        <Route path='/' element ={<Home />} />
        <Route path="/statistics" element={<StatisticsSection />} />
        <Route path='/form' element={<Form />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
