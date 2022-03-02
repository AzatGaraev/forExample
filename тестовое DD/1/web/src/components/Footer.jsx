

    import vk from "../assets/vk.png"
    import fb from "../assets/fb.png"
    import instagram from "../assets/instagram.png"
    
    
    const Footer = () => {
        return (
            <footer>
                <p>Компания</p>
                <a href="tel: ">+7 937 16 33 006</a><br/>
                <a href="mailto: ">garaz90@mail.ru</a>
                <div className="socSeti">
                    <button className="sqr">
                        <a href="https://vk.com/" target='new'>
                            <img className="vkIcon" src={vk} alt="VK"/>
                        </a>
                    </button>
                    <button className="sqr">
                        <a href="https://facebook.com/" target='new'>
                            <img className="fbIcon" src={fb} alt="FB"/>
                        </a>
                    </button>
                    <button className="sqr">
                        <a href="https://instagram.com/" target='new'>
                            <img className="instIcon" src={instagram} alt="Inst"/>
                        </a>
                    </button>
                </div>
    
            </footer>
        )
            
        
    }
    
    export default Footer