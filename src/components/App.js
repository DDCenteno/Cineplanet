import React from 'react';
import Footer from './Footer';
import MainNav from './MainNav'
import './App.css';

const App = ({ actualPage, navigateTo }) => (
  <div className="container-fluid">
    <MainNav actualPage={ actualPage } navigateTo={navigateTo}/>
    <Footer navigateTo={navigateTo}/>
  </div>
);

export default App;
