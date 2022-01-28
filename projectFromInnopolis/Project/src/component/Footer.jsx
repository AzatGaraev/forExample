import vk from "../imgicon/vk.png"
import fb from "../imgicon/fb.png"
import instagram from "../imgicon/instagram.png"


const Footer = () => {
    return (
        <footer>
            <div className="downStairs">
				<div className="adress">БАРБЕРШОП БОРОДИНСКИЙ<p className="smallTextAdr">г. Санкт-Петербург, ул. Большая Конюшечная 19/8<br/>Тел.:+7 (812) 555-66-66</p></div>

				<div className="socSeti">
					<p className="smallTextSoc">Давайте дружить!</p>
					<button className="sqr"><a href="https://vk.com/" target='new'><img className="vkIcon" src={vk} alt="VK"/></a></button>
					<button class="sqr"><a href="https://facebook.com/" target='new'><img className="fbIcon" src={fb} alt="FB"/></a></button>
					<button class="sqr"><a href="https://instagram.com/" target='new'><img className="instIcon" src={instagram} alt="Inst"/></a></button>
				</div>

				<div className="dev">
					<p className="smallTextSoc">Срисовал:</p>
					<button className="btnDev">
						<a href='https://www.instagram.com/gar_az666' target='new'>Azat Garaev</a>
					</button>
					
				</div>
			</div>
        </footer>
    )
        
    
}

export default Footer