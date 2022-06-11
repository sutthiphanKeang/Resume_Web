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

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLyout/>}>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='educations' element={<Education/>}></Route>
        <Route path='experiences' element={<Experience/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
