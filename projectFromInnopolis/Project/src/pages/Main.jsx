import logo from "../imgicon/logo.png";
import back_desktop from '../imgicon/back_desktop.png';

import nozhnici from '../imgicon/nozhnici.png';
import kreslo from '../imgicon/kreslo.png';
import hz from '../imgicon/hz.png';

import { Link } from "react-router-dom";




const Main = () => {
    return (
    <main>
        <div className="part1" style={{ backgroundImage: `url(${back_desktop})` }}>
				<div className="logoDiv">
					<img src={logo}/>
				</div>
                <div className="vlogsUp">
					
					<div className="vlog style1">Стрижка у нас это выгодно!</div>
					<div className="vlog style2">1500* <p className="smallText">рублей вложений</p></div>
					<div className="vlog style3">7200 <p className="smallText">секунд времени мастера</p></div>
				</div>
        </div>

        <div className="part2">
				<div className="vlogsDown">
					<div className="vlog style4">Мужская стрижка требует точного подхода. Обратимся к статистике:<br/>
                    <p className="styleTextStar">* - приведенные данные ложь</p></div>
					<div className="vlog style5">90 000 <p className="smallText">постриженых волос</p></div>
					<div className="vlog style6">500 000* <p className="smallText">лайков и комплиментов</p></div>
				</div>

                <div className="cardInfo">
					<div className="card1">
						<img className="imgCard1" src={nozhnici} alt="nozhnici"/>
						<br/><p className="firstWordByCard">БЫСТРО</p>
						<p className="smallTextCard">Мы делаем свою работу быстро! Два часа пролетят незаметно и вы - счастливый обладатель стильной стрижки - минутки</p>
					</div>

					<div className="card2">
						<img className="imgCard2" src={kreslo} alt="kreslo"/>
						<br/><p className="secondWordByCard">КРУТО</p>
						<p className="smallTextCard">Забудьте, как вы стриглись раньше. Мы сделаем из вас звезду футбола или кино. Во всяком случае внешне.</p>
					</div>
					

					<div className="card3">
						<img class="imgCard3" src={hz} alt="hz"/>
						<br/><p className="thirdWordByCard">ДОРОГО</p>
						<p className="smallTextCard">Наши мастера - профессионалы своего дела не могут стоить дёшево. К тому же, разве цена не дает определенный статус?</p>
					</div>
				</div>
		</div>

        <div className="part3">
				<div className="triangle-down"></div>
				<div className="part3Line">
					<span className="newsFromPart3">НОВОСТИ И АКЦИИ</span>
					{/* <button type="submit" className="btn1">ПОКАЗАТЬ ВСЕ</button> */}
				</div>

                <div className="news">
					
					<div className="blackSquare1">29 СЕНТ</div>
					<div className="angleForSquare1"></div>
					<p className="text1Part3">Нам наконец завезли Егермайстер! Теперь вы можете пропустить стаканчик во время стрижки.</p>
					
					<div className="blackSquare2">19 СЕНТ</div>
					<div className="angleForSquare2"></div>
					<p className="text2Part3">В нашей команде пополнение, Борис «Бритва» Стригунец, пополнил наши стройные ряды. Спешите записаться!</p>

					<div className="blackSquare3">9 СЕНТ</div>
					<div className="angleForSquare3"></div>
					<p className="text3Part3">Все дорожает, а наши стрижки нет! Как так? Приходите, постригитесь и узнаете, в чем здесь подвох!</p>
				</div>

        </div>

        <div className="part4">
				<div className="part4Line">
					<span className="feedback">ОТЗЫВЫ О НАС</span>
					<button className="btn2">
					<Link to='/Feedback'>
						ОСТАВИТЬ СВОЙ
					</Link>
					</button>
				</div>
				
			</div>
        

    </main>
    )
    
        
    
}

export default Main