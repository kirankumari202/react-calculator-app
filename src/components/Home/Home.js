import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    function removeOverlay() {
        document.getElementById('overlay-home').style.display = 'none';
    }
    return (
        <>
        <div id="overlay-home" onClick={() => {removeOverlay()}}>
                    <div>Click/Tap anywhere to Turn ON the calculator!</div>
                </div>
            <div className="home1">  
                <h1>Welcome to the home page!</h1>
            </div>
            <div className='image'>
                <Link to="/calc">
                    <img className='img1' src="https://i.ibb.co/023gN7r/img1.png" width={400} height= {300} ></img>
                </Link>
                <Link to="/cart">
                    <img className='img2' src="https://i.ibb.co/V2SCsf8/img2.png" width={400} height= {300} ></img>
                </Link>

            </div>
            <div className="copyright">
                    <p>Made with &hearts;</p>
                    <a style={{color: 'white', textDecoration: 'none', textAlign:'center'}} target='_blank'
                     href="https://github.com/kirankumari202">&copy; kirankumari202(Kiran kumari)</a>
                    
                </div>
        </>
    )
    }

export default Home;