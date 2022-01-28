import Slider from 'react-perfect-slider';


import Travis from '../imgicon/Travis.bmp';
import Trump from '../imgicon/Trump.bmp';
import Fantomas from '../imgicon/Fantomas.bmp';
const Carusel = () =>{
  return  (
  <Slider>
    
    <div>
    <img src={Travis}
    style={{width: '80%'}}/>
    </div>
    <div>
    <img src={Trump}
    style={{width: '80%'}}/>
    </div>
    <div>
    <img src={Fantomas}
    style={{width: '80%'}}/>
    </div>
    
  </Slider>
);
}

export default Carusel