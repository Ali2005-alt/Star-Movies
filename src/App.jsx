import React from 'react'
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contect from './Contect';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
      
    </>
  )
}

export default App
