import "../styles/Cart.css"
import { useState, useEffect } from "react";

const Cart = ({cart, updateCart, category, selectCategory}) => {
    const monsteraPrice = 8
    const [open, updateOpen] = useState(false);
    const total = cart.reduce((acc, plantType) => acc+plantType.amount*plantType.price, 0)

    useEffect(() => {
        document.title = "LMJ : "+total+"€ d'achats" 
    }, [cart]) 

    return open ? (
        <div className="lmj-cart">
            <button className="lmj-cart-toggle-button" onClick={() => updateOpen(false)}>Masquer le panier</button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount}, index) => (
                <div key={`${name}-${index}`}> {name} • {price}€ × {amount} </div>
            ))} 
            <h3>Total : {total}€ </h3>
            <button className="lmj-cart-toggle-button" onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button className="lmj-cart-toggle-button" onClick={() => updateOpen(true)}>Afficher le panier</button>
        </div>
    )
}

export default Cart