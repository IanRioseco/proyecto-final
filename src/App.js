import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Deckbuilder from './components/Deckbuilder';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Deckbuilder" element={<Deckbuilder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
