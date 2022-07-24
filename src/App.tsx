import * as React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import { MainLyout } from './components/MainLayout';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLyout/>}>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Skills' element={<Skills/>}></Route>
        <Route path='Education' element={<Education/>}></Route>
        <Route path='Experience' element={<Experience/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
