import React from 'react';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';


function App() {
  return (
 <>
 <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home /> } exact="/" />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Project" element={<Project />} />
    </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
