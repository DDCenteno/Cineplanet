import React, { Component }  from 'react';
import Footer from './Footer';
import MainNav from './MainNav'
import './App.css';

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
