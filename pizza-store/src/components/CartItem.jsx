

const CartItem = ({item, onRemoveItem}) => {
    return (
        
            <div className="cart__item">
                <img
                    src="https://agonp.ru/wp-content/uploads/2020/12/firmennaya_1600x1200-400x300.jpg"
                    alt="pizza" className="cart__item-img"
                />
                <div className="cart__item-title">{item.name}</div>
                <div className="cart__item-price">{item.price} </div>
                <div className="cart__item-close" onClick={() => onRemoveItem(item.id)}>&times; </div>
            </div> 
            
        
    )
}

export default CartItem