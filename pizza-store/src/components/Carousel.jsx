import Slider from 'react-perfect-slider';

const Carousel = () =>{
    return (
        <Slider>
          
          <div>
          <img src='https://agonp.ru/wp-content/uploads/2021/03/banner-kombo--1536x324.jpg'
          className='slider__style'/>
          </div>
          <div>
          <img src='https://agonp.ru/wp-content/uploads/2021/03/besplatnyj-sous-1536x324.jpg'
          className='slider__style'/>
          </div>
          <div>
          <img src='https://agonp.ru/wp-content/uploads/2021/03/banner-na-sajt-burger-1536x323.jpg'
          className='slider__style'/>
          </div>
          
        </Slider>
      )
      
}
export default Carousel