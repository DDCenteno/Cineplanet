import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import SignUp from './SignUp'
import './App.css';

const App = () => (
  <div className="container-fluid">
    {/*Page 1*/}
    <Header />
    <Main />
    <Footer />
    {/*Page 2*/}
    <SignUp />
  </div>
);

export default App;
