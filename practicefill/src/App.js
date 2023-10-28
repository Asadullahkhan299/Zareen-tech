import React, { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import Project from './pages/Project';
import Services from './pages/Services';
import Team from './pages/Team';
import About from './pages/About';
import Navbarr from './components/common/Navbarr'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {


  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbarr />
          <Routes>  
            <Route path='/' element={<HomePage />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  )
}

export default App
