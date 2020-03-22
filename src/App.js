import React from 'react';
//import fetch from './components/fetch'
import './App.css';
import Navbar from './components/Navbar';
import WorldTable from './components/WorldTable';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Cards/>
     <WorldTable/>
    </div>
  );
}

export default App;
