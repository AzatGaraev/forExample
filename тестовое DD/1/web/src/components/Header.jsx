import { Link } from "react-router-dom"



const Header = () => {

    return (
    <header>
        
        <div className="topStr">
            <img className="label" src="https://www.azoft.ru/wp-content/themes/azoft/images/azoft-logo.svg" alt="label"/>
            <nav> 
            <ul className="ul__header">
                    
                    <li>
                        <Link to='/'>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to='/Cases'>
                            Кейсы
                        </Link>
                    </li>
                                      
                    <li>
                        <Link to='/Company'>
                            Компания
                        </Link>
                    </li>
                    <li>
                        <Link to='/Contacts'>
                            Контакты
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
        
    </header>
    
    )}

export default Header