import React, { Component }  from 'react';
import Footer from './Footer';
import MainNav from './MainNav'
// import SignUp from './SignUp'
// import Cines from './Cines';
// import Confirm from './Confirm';
// // import Seats from './Seats';
// import Tickets from './Tickets';
import './App.css';
// Comento porque esta version de App es funcional
// const App = () => (
//   <div className="container-fluid">
//     {/*Page 1*/}
//     <Header />
//     <Main />
//     <Footer />
//     {/*Page 2*/}
//     <SignUp />
//     {/*Page 3*/}
//     <Cines />
//      {/* Final Page */}
//     <Confirm />

//     {/* Butacas */}
//     {/* <Seats /> */}
    
//     {/* Entradas */}
//     <Tickets currentTicketPrice="14.00"/>
//   </div>
// );

class App extends Component {
  componentWillMount() {
    this.props.getData()
  }

  render(){
    const { actualPage, data, movies, navigateTo } = this.props;
    return(
    <div className="container-fluid">
      <MainNav actualPage={ actualPage } navigateTo={ navigateTo } data={data} movies={movies} />
      <Footer navigateTo={navigateTo}/>
    </div>)
  }
};

export default App;
