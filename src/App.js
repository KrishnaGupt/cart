import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  
  return (
    <div className="text-4xl w-full">
      <Navbar/>
      {/* <Products/> */}
      <Home/>
    </div>
  );
}

export default App;
