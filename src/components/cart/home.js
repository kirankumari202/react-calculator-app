import React from 'react';
import list from '../data';
import Cards from './card';
import '../styles/home.css';

const Home = ({ handleClick }) => {
    return (
        <div className="container" style={{textAlign: 'center'}}>
            <div className="container-fluid" style={{textAlign:'center', padding:'1%', fontSize:'1.8rem'}}>
                <p>Our Items</p>
            </div>
            {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default Home;