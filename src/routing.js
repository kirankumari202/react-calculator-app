import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import BasicCalculator from './components/calc/BasicCalculator';
import Cart from './App';

const Routing =  () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path="/calc" component={BasicCalculator} />
            <Route path="/cart" component={Cart} />
        </BrowserRouter>
    )
}

export default Routing;