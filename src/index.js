import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routing';

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Routing />);
