import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import Nav from './Components/Nav';
import Servises from './Components/Services';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route  path={"/"} element={<Servises/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
