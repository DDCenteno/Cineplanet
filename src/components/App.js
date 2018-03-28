import React from 'react';
// import Header from './Header';
import Main from './Main'
// import SignUp from './SignUp'
import Footer from './Footer';
//  import Cines from './Cines';
//  import Confirm from './Confirm';
import Seats from './Seats';
import Runway from './Runway';
// import Tickets from './Tickets';
import './App.css';
// Comento porque esta version de App es funcional
const App = () => (
   <div className="container-fluid">
     {/*Page 1*/}
     {/* <Header /> */}
     <Main />
     <Footer />
     {/*Page 2*/}
     {/* <SignUp /> */}
     {/*Page 3*/}
     {/* <Cines /> */}
      {/* Final Page */}
     {/* <Confirm /> */}

     {/* Butacas */}
     <Seats screenIcon="teatro-de-pantalla-de-cine.svg" />  
     {/* Entradas */}
     {/* <Tickets currentTicketPrice="14.00"/> */}
     <Runway />
   </div>
 );

// class App extends Component {
//   componentWillMount() {
//     this.props.getData()
//   }

//   render(){
//     return(
//     <div className="container-fluid">
//       <MainNav actualPage={ this.props.actualPage } navigateTo={ this.props.navigateTo } data={this.props.data}/>
//       <Footer navigateTo={this.props.navigateTo}/>
//     </div>)
//   }
// };

export default App;
