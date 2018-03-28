import React, { Component }  from 'react';
import Footer from './Footer';
import MainNav from './MainNav'
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getData()
  }

  render(){
    return(
    <div className="container-fluid">
      <MainNav actualPage={ this.props.actualPage } navigateTo={ this.props.navigateTo } data={this.props.data}/>
      <Footer navigateTo={this.props.navigateTo}/>
    </div>)
  }
};

export default App;
