import { Route, Routes } from 'react-router-dom';


import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './pages/Menu';

import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';



const App = () => {
  return (
  <>
    <Header/>
    <Carousel/>
    <Routes>
    <Route path='/' element={<Menu/>}/>
      <Route path='/delivery' element={<Delivery/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contacts' element={<Contacts/>}/>

    </Routes>
    
    <Footer/>
  </>
  )
}

export default App;
