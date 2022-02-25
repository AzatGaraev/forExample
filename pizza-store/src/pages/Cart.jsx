import { useSelector, useDispatch } from "react-redux"
import CartItem from "../components/CartItem"
import  removeCartItem from "../redux/actions/index"
import removeCart from "../redux/actions/index"



const Cart = () =>{

    const dispatch = useDispatch()

    const {items, totalPrice, totalCount} = useSelector((cart) => cart)

     
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id))

    }

    const onRemoveCart = () => {
        if(window.confirm('Вы действительно хотите очистить корзину?')) {
        dispatch(removeCart())
        }
    }

    return (
    <div className="cart">
        {items && items.length > 0 ? (
            <div className="cart__title">ВАШ ЗАКАЗ:</div>
        ) : (
            <div className="cart__title">КОРЗИНА ПУСТАЯ:</div>
        )}
        {items && items.length > 0 && <button className="button__remove" onClick={() => onRemoveCart()}>
            Очистить корзину</button>}
        <div className="cart__list">
            {items && items.map((item) => <CartItem item={item} key={item.id} onRemoveItem={onRemoveItem}/>)}
        </div>

        <div style={{fontSize: 33, marginTop: 30}}> {totalCount !== 0 && `Всего товаров: ${totalCount} шт.`} </div>
        <div style={{fontSize: 33, marginTop: 30}}> {totalPrice !== 0 && `Всего товаров: ${totalPrice} руб.`} </div>

        {items && items.length > 0 && <button className="button__order">Оформить заказ</button>}
    </div>
)}

export default Cart