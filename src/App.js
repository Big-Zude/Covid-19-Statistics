import React from 'react';
//import fetch from './components/fetch'
import './App.css';
import Navbar from './components/Navbar';
import WorldTable from './components/WorldTable';
import Cards from './components/Cards';
//import Zambia from './components/Zambia'



function App() {
  return (
    
    <div className="App">
      <Navbar />
      {/* <div class="bingwidget" data-type="covid19" data-market="en-us" data-language="en-us"></div>
      */}
      
      
      <iframe
        src="https://public.domo.com/cards/bWxVg"
        width="50%"
        height="600"
        align="center"
        marginheight="0"
        marginwidth="0"
        frameborder="0">
        </iframe>
      {/* <Cards/> */}
      <WorldTable />
    </div>
  );
}

export default App;
