import React from 'react';
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList/>} />
        <Route path="/:id" element={<CharacterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
