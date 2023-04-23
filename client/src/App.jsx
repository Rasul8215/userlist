import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LogIn from './components/login';
import  Home from "./components/home"
import Front from './components/front';
import Details from './components/details';

function App() {
 return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Front />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/home" element={<Home />} />
    <Route path="/details" element={<Details />} />
      {/* <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
   
  </Routes>
</BrowserRouter>

 )
}

export default App
