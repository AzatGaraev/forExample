

import Slider from 'react-perfect-slider';


import f2 from "../imgicon/2.jpg";
import f3 from "../imgicon/3.jpg";
import f4 from "../imgicon/4.jpg";
import f5 from "../imgicon/5.jpg";
import f6 from "../imgicon/6.jpg";




const Our_works = () => {
    return (
    
<Slider>
    <div className="box">
        <img className="f2" src={f2}/>
    </div>
    <div className="box">
        <img className="f3" src={f3}/>
    </div>
    <div className="box">
        <img className="f4" src={f4}/>
    </div>
    <div className="box">
        <img className="f5" src={f5}/>
    </div>
    <div className="box">
        <img className="f6" src={f6}/>
    </div>
    
</Slider>       

    )     
    
}

export default Our_works