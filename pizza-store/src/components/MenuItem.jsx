import pizza1 from '../assets/pizza1.jpg'
import pizza2 from '../assets/pizza2.jpg'
import pizza3 from '../assets/pizza3.jpg'
import pizza4 from '../assets/pizza4.jpg'
import pizza5 from '../assets/pizza5.jpg'


const img = {
    one: pizza1,
    two: pizza2,
    three: pizza3,
    four: pizza4,
    five: pizza5,
}

const MenuItem = ({item, handleAddPizzaToCart}) => {
    
    return (
        <div className="menu__item">
            <img src={img[item.src]}
            alt="pizza"
            style={{width: '100%', borderRadius: 10}}
            />
            <p className="menu__title">{item.name}</p>
            <p className="menu__descr">{item.descr}</p>
            <p className="menu__price">{item.price}</p>
            <button className='button__add' onClick={() =>
                handleAddPizzaToCart({
                    id: (Math.random() /  Math.random()) * Math.random(),
                    name: item.name,
                    price: item.price,
                })
            }>
            Добавить корзину</button>
        </div>
    )

    
}

export default MenuItem