import React from 'react'; 
import '../styles/card.css';
import Images from '../img-assets/images';

const Cards = ({item, handleClick} ) => {
    const {itemImg, itemName, itemDescription, itemPrice, itemOldPrice} = item;
    return (
        <div className="card">
            <div className="top-img">
                <img src={Images[itemImg]} alt="cotton shirt" className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">{itemDescription}</p>
                <p>
                    <span className="card-text price">Price: Rs. {itemPrice}</span>
                    <span className="card-text old-price">Rs. {itemOldPrice}</span>
                </p>
                <button type="button" className="btn button btn-lg" onClick={() => {handleClick(item)}}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;