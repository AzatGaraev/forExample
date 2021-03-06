import logo from '../assets/logo.jpg'
import logo2 from '../assets/logo2.jpg'


const Main = () => {
    return (
        <>
            <div className='container'>
                <div><a id='top'/></div>
                <div className="containerForPic">
                    <img className="picKod" src="https://images11.popmeh.ru/upload/img_cache/584/584b4f6389dd04b9a4e3c3e12da25a83_ce_6000x3994x0x2_cropped_1332x888.jpg" alt="kod"/>
                    <h1>Cтек технологий для разработки веб-приложений</h1>
                </div>
                <p>Один из наиболее важных шагов, которые нужно предпринять, когда дело доходит до разработки приложения, — это выбрать правильный стек технологий. Этот вопрос значительно влияет на успех проекта, как в краткосрочной, так и долгосрочной перспективе. Почему? Стек технологий для разработки веб-приложений влияет на стоимость проекта, сроки выпуска продукта на рынок, безопасность и масштабируемость приложения. Грамотно подобранный стек позволяет получить стабильный, безопасный и удобный в обслуживании продукт, который не только завоюет сердца ваших клиентов, но и позволит вам масштабировать бизнес.<br/>

                Конечно, принято полагаться на предложения технологического партнера по разработке веб-проектов. Однако мы в Azoft считаем, что клиентам важно иметь общее представление о стеке технологий для <a href="https://ru.wikipedia.org/wiki/Веб-разработка" target='new'>веб-разработки</a>. Это помогает нам говорить на одном языке и эффективно достигать ваших целей. Вот почему мы подготовили эту статью.<br/>
                
                Теперь давайте рассмотрим, что такое стек и какие технологии мы используем для создания веб-приложений.</p>
                <h2>Веб-приложение: что такое, из чего состоит, виды:</h2>
                <p>Прежде чем говорить о стеке технологий, поясним, что такое веб-приложение и из чего оно состоит. Bеб-приложение — это сайт с элементами интерактива. Они позволяют пользователям взаимодействовать: нажимать кнопки, заполнять формы, запрашивать прайс, совершать покупки. Почтовые клиенты, соцсети, поисковики, интернет-магазины, программы для управления проектами — это всё примеры таких приложений.</p>
                <img src={logo} alt="logo" className='main__logo'/>
                <p>С точки зрения архитектуры веб-приложения состоят из двух частей: клиентской и серверной. Клиентская часть также называется фронтэнд. По сути это то, что пользователи видят на экране устройства. Серверная часть, или бэкенд — программно-аппаратная часть сервиса. Это набор средств, которые реализуют логику приложения. </p>
                <img src={logo2} alt="logo2" className='main__logo'/>
                <h3>Выделяют три вида веб-приложений, которые определяют подход к разработке:</h3>
                <ul>
                    <li>
                        <a href='https://ru.wikipedia.org/wiki/Одностраничное_приложение' target='new'>SPA или Single Page Application</a>— это одностраничное веб-приложение, которое загружается на одну HTML-страницу. Пользователям не нужно перезагружать или подгружать дополнительные страницы благодаря динамическому обновлению с использованием JavaScript. То есть пользователи видят в браузере весь основной контент, а когда прокручивают страницу или переходят на другие, нужные элементы просто подгружаются.
                    </li>
                    <li>
                        <a href='https://ru.wikipedia.org/wiki/MPA' target='new'>MPA или Multi Page Application</a>— это многостраничные приложения, где при каждом изменении данных или загрузке новой информации страница обновляется.
                    </li>
                    <li>
                        <a href='https://ru.wikipedia.org/wiki/Прогрессивное_веб-приложение' target='new'>PWA или Progressive Web App</a>— это своего рода гибрид сайта с мобильным приложением. Они могут устанавливаться на главный экран смартфона, отправлять push-уведомления и работать в офлайн режиме.
                    </li>
                </ul>
                <h2>Клиентская часть приложения</h2>
                <p>Фронтэнд, т.е. клиент представляет собой интерактивную часть программы, которая исполняется в веб-браузере на компьютере, смартфоне или планшете. Клиентская часть реализует пользовательский интерфейс веб-приложения и загружается в виде динамических веб-страниц.<br/><br/>Рассмотрим основные компоненты стека интерфейсов.</p>
                <h2>HTML</h2>
                <p>HTML — это стандартный язык разметки, который применяют для создания веб-проектов. Его элементы позволяют отображать стандартные блоки страниц, а также представляют форматированный текст, изображения, таблицы, формы ввода данных и т.д. Когда браузер направляет запрос URL-адреса, чтобы получить страницу или приложение, в первую очередь возвращается HTML-документ. HTML-документ содержит дополнительные сведения об оформлении или макете в виде CSS, а также о поведении в виде JavaScript.</p>
                <h2>CSS</h2>
                <p>Каскадные таблицы стилей (CSS) — это язык разметки, который определяет оформление и макет элементов HTML. Таким образом, HTML задаёт структуру, а CSS — стиль. С помощью CSS задаются шрифты, цвета, стили, расположение отдельных элементов, а также отображение страниц на разных устройствах. </p>
                <h2>JavaScript</h2>
                <p>JavaScript — это язык программирования, который помогает реализовывать сложное поведение веб-страницы. В большинстве случаев JavaScript используется для создания адаптивных интерактивных элементов для веб-страниц, которые улучшают взаимодействие с пользователем. С помощью JavaScript можно создавать меню, анимацию, видеоплееры, интерактивные карты и даже простые игры в браузере.<br/><br/>Чтобы эффективнее разрабатывать на JavaScript, разработчики используют фреймворки, которые также являются важной составляющей технологического стека. Фреймворк — это рабочая среда, своего рода каркас, который помогает эффективнее создавать и поддерживать программные продукты. Далее мы перечислим некоторые из фреймворков и библиотек, которые мы обычно используем в проектах.</p>
                <div><a href='#top' className="idTop">ВВЕРХ</a></div>
            </div>
        </>
    )
}

export default Main