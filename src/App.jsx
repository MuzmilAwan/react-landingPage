import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/ui/navbar"
import Footer from "./components/ui/footer"

import {
  Home,
  About,
  Solution,
  Explore,
  Login,
  Blog,

} from "@sections";


function App() {


  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App;
