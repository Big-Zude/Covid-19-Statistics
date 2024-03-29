import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WorldTable from './components/WorldTable';
import Cards from './components/Cards'
import BarChart  from './components/barchart';



function App() {
  return (
    
    <div className="App">
      <Navbar />
      
      {/* <iframe
        src="https://public.domo.com/cards/bWxVg"
        title='covid'
        width="50%"
        height="600"
        align="center"
        marginheight="0"
        marginwidth="0"
        frameborder="0">
        </iframe> */}
      <Cards />
      <BarChart/>
      <WorldTable />
    </div>
  );
}

export default App;
