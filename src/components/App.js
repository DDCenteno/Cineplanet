import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Cines from './Cines';

import './App.css';

const App = () => (
  <div className="container-fluid">
    <Header />
    <Main />
    <Cines />
    <Footer />
  </div>
);

export default App;
