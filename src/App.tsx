import React from 'react';
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";

import './App.css';
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/:id" element={<CharacterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
