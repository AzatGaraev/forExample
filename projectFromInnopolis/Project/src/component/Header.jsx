import login_icon from "../imgicon/login_icon.png"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
				<span className="select Nav1">
					<Link to='/'>
					ГЛАВНАЯ
					</Link>
					</span>
				<span className="select Nav2">
					<Link to='/Our_works'>
					НАШИ РАБОТЫ
					</Link>
					</span>
				<span className="select Nav3">
					<Link to='/Recording'>
					ЗАПИСАТЬСЯ
					</Link>
					</span>
				<span className="select Nav4">
					<Link to='/Contacts'>
					КОНТАКТЫ
					</Link>
					</span>
				<span className="select Nav5"><a href="https://www.htmlacademy.ru" target="new">HTML ACADEMY</a></span>
				<img className="loginIcon" src={login_icon} alt="login_icon" />
				<span className="select Nav6">
					<Link to='/Authorization'>
					ВОЙТИ
					</Link>
					</span>
			</nav>
        </header>
    )
        
    
}

export default Header