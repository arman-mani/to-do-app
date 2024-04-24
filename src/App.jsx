import React from 'react';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navigation from './komponenter/navigation';
import Startsida from './pages/startsida';
import Information from './pages/information';
import Todos from './pages/todos'; 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/information" element={<Information />} />
          <Route path="/todos" element={<Todos />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


