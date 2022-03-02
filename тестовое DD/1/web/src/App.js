import React from 'react';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Subs from './components/Subs';

import {Routes, Route} from 'react-router'


import Contacts from "./pages/Contacts";
import Company from "./pages/Company";
import Cases from "./pages/Cases";
import Main from "./pages/Main";



const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Company' element={<Company/>}/>
        <Route path='/Cases' element={<Cases/>}/>
      </Routes>
      <Subs/>
      <Footer/>
    </>
  );
}

export default App;
