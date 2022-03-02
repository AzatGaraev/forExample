import React from 'react';

import { Routes, Route } from 'react-router';




import Main from "./pages/Main";
import Company from "./pages/Company";
import Cases from "./pages/Cases";
import Contacts from "./pages/Contacts";








const Routes = () => {
  return (
  <>
    
    
      <Route path='/' element={<Main/>}/>
      <Route path='/Company' element={<Company/>} />
      <Route path='/Cases' element={<Cases/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      
      
    
    
    
  </>
  )
     
}

export default Routes;