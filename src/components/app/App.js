import React from 'react';
import './App.css';
import TopNav from '../top-nav/top-nav'
import Main from '../main/main'

const App = () => (
  <div>
    <TopNav></TopNav>
    <div className="container">
      <Main></Main>
    </div>
  </div>
)
export default App;
