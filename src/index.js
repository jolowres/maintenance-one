import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import TopNav from './top-nav/top-nav'
import Home from './home/home'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <div>
    <TopNav></TopNav>
    <BrowserRouter>
      <Route path="/" component={ Home }/>
    </BrowserRouter>
  </div>, document.getElementById('root')
);
registerServiceWorker();
