import React from 'react';
//import fetch from './components/fetch'
import './App.css';
import Navbar from './components/Navbar';
import WorldTable from './components/WorldTable';

function App() {
  return (
    <div className="App">
     <Navbar/><br/><br/>
     <WorldTable/>
    </div>
  );
}

export default App;
