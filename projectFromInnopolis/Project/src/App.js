import React from 'react';
import { Routes, Route } from 'react-router';

import Header from './component/Header';
import Slider from './component/Slider';
import Footer from './component/Footer';

import Main from './pages/Main';



import Our_works from "./pages/Our_works";
import Recording from "./pages/Recording";
import Contacts from "./pages/Contacts";
import Authorization from "./pages/Authorization";
import Feedback from "./pages/Feedback";







const App = () => {
  return (
  <>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/Our_works' element={<Our_works/>} />
      <Route path='/Recording' element={<Recording/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Authorization' element={<Authorization/>}/>
      <Route path='/Feedback' element={<Feedback/>}/>
    </Routes>
    
    <Slider/>
    <Footer/>
  </>
  )
     
}

export default App;
