import axios from 'axios'
import { useState, useEffect } from 'react'
import MenuItem from "../components/MenuItem"
import { useDispatch } from 'react-redux'

// const array = [ 
//     {
//         id: 1,
//         src: 'https://agonp.ru/wp-content/uploads/2020/12/firmennaya_1600x1200-400x300.jpg',
//         name: 'Фирменная',
//         descr: 'Цыпленок, бекон, моцарелла, томаты, красный лук, зелень, чеснок, пицца-соус.',
//         price: '400 руб.',
//     },
//     {
//         id: 2,
//         src: 'https://agonp.ru/wp-content/uploads/2021/01/bavarskaya_1600x1200-400x300.jpg',
//         name: 'Баварская',
//         descr: 'Цыпленок, бекон, моцарелла, томаты, красный лук, зелень, чеснок, пицца-соус.',
//         price: '550 руб.',
//     },
//     {
//         id: 3,
//         src: 'https://agonp.ru/wp-content/uploads/2021/11/myasnaya_1600x1200-400x300.jpg',
//         name: 'Мясная',
//         descr: 'Цыпленок, бекон, моцарелла, томаты, красный лук, зелень, чеснок, пицца-соус.',
//         price: '440 руб.',
//     },
//     {
//         id: 4,
//         src: 'https://agonp.ru/wp-content/uploads/2020/09/pepperoni_1600x1200.jpg',
//         name: 'Пепперони',
//         descr: 'Цыпленок, бекон, моцарелла, томаты, красный лук, зелень, чеснок, пицца-соус.',
//         price: '620 руб.',
//     },
//     {
//         id: 5,
//         src: 'https://agonp.ru/wp-content/uploads/2020/09/4-syra_1600x1200-400x300.jpg',
//         name: 'Четыре сыра',
//         descr: 'Цыпленок, бекон, моцарелла, томаты, красный лук, зелень, чеснок, пицца-соус.',
//         price: '510 руб.',
//     },
// ]
const Menu = () => {
    const dispatch = useDispatch()

    const [items, setItems] = useState(null)

    const [error, setError] = useState(null)


    useEffect(() => {
        axios
            .get("http://localhost:3000/db.json")
            .then((res) => setItems(res.data.menu))

            .catch((error) =>
            setError(
                `Ошибка загрузки данных: ${error.response.status}
                ${error.response.statusText}`
            )
        )
    }, [])

    const handleAddPizzaToCart = (Obj) => {
        dispatch({
            type: "ADD_PIZZA_TO_CART",
            payload: Obj,
        })
    }
    return (


    <div className="container">
        <div className="menu">
            
            {items && items.map((i) => <MenuItem item={i} key={i.id}
            handleAddPizzaToCart = {handleAddPizzaToCart}/>)}
            
            {error && <p>{error}</p>}
            
            
        </div>
    
    
    </div>
        


    )}


export default Menu
