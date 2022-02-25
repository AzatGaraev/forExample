import Logo from '../assets/Logo.png'
import korzina from '../assets/korzina.png'


import  { Link } from 'react-router-dom'

const Header = () => {


    

return <header>
    <div className="container">
        <nav>
            
            <img src={Logo} alt='Logo' className='header__logo' />
            <ul>
                <li>
                   <Link to='/' style={{textDecoration: 'none'}}>
                    Меню
                    </Link> 
                </li>
                <li>
                    <Link to='/delivery'style={{textDecoration: 'none'}}>
                    Доставка и оплата
                    </Link>
                </li>
                <li>
                    <Link to='/contacts'style={{textDecoration: 'none'}}>
                    Контакты
                    </Link>
                </li>
            </ul>
            <Link to='/cart'style={{textDecoration: 'none', margin: 'auto 0'}}>
                <button className='button__cart' >
                    2000 руб.
                    <img className='header__cart' src={korzina} alt='korzina'/>
                </button>
            </Link>
        </nav>
    </div>
    </header>
}
export default Header
