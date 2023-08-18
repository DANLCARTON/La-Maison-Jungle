import logo from '../logo.svg';
import '../styles/App.css';
import Banner from "./Banner"
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import MoreInfo from "./MoreInfo"
import { useEffect, useState } from 'react';

function App() {

    const storedCart = localStorage.getItem("cart")
    const [cart, updateCart] = useState(storedCart ? JSON.parse(storedCart) : []) 
    const [category, selectCategory] = useState("") 

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return <div>
        <Banner />
        <div className="lmj-layout-main">
            <Cart cart={cart} updateCart={updateCart} category={category} selectCategory={selectCategory}/> {/*category part dans les props*/}
            <ShoppingList cart={cart} updateCart={updateCart} category={category} selectCategory={selectCategory}/> {/*category part dans les props*/}
        </div>
        {/*<QuestionForm />*/}
        <Footer />
        <MoreInfo />
    </div>
}

export default App;
