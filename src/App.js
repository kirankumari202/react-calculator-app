import React, {useState} from 'react';
import Home from './components/cart/home';
import Navbar from './components/cart/navbar';
import Cart from './components/cart/cart';

const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    // on `add to cart` click, this will be called.
    const handleClick = (item) => {
        console.log(item, cart);
        // if the item is present already, return back;
        if(cart.indexOf(item) !== -1) return;
        // if not present, then add it to cart[] arr
        setCart([...cart, item]);
    };

    return (
        <>
        {/* this sets whether to show the HomePage, or the Cart page
        and sends the updated data to the component every time. */}
        <Navbar setShow={setShow} size={cart.length} />
        {show ? (
            <Home handleClick={handleClick} />
        ): (
            <Cart cart={cart} setCart={setCart} />
        )}
        </>
    )
}

export default App;