import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </div>, document.getElementById('root')
);
registerServiceWorker();
