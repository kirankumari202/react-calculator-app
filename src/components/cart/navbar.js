import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ setShow, size }) => {
    return (
        <nav>
            <div className="container-fluid  my-cart-head">
                <h3 className="my_shop" onClick={() => setShow(true)}>
                    My Shopping
                </h3>
                <div className="cart" onClick={() => setShow(false)}>
                    <span><i className="fas fa-cart-plus"></i></span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;