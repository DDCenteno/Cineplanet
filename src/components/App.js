import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SignUp from './SignUp'
import Cines from './Cines';
import Confirm from './Confirm';
// import Seats from './Seats';
import Tickets from './Tickets';
import './App.css';

const App = () => (
  <div className="container-fluid">
    {/*Page 1*/}
    <Header />
    <Main />
    <Footer />
    {/*Page 2*/}
    <SignUp />
    {/*Page 3*/}
    <Cines />
     {/* Final Page */}
    <Confirm />

    {/* Butacas */}
    {/* <Seats /> */}
    
    {/* Entradas */}
    <Tickets currentTicketPrice="14.00"/>
  </div>
);

export default App;
