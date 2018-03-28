import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SignUp from './SignUp'
import Cines from './Cines';
import CineMovie from './CineMovie';
import DetailsCine from './DetailsCine';
import Movies from './Movies';
import ScheduleCine from './ScheduleCine';
import Dowloand from './Dowloand';
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
    {/*Page 4*/}
    <CineMovie />
    {/*Page 5*/}
    <DetailsCine />
    {/*Page 6*/}
    <Movies/>
    {/*Page 7*/}
    <ScheduleCine/>
    {/*Page 8*/}
    <Dowloand/>
  </div>
);

export default App;
