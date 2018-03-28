import React from 'react';
import Main from './Main';
import SignUp from './SignUp'
import Cines from './Cines';
import Confirm from './Confirm';
import CineMovie from '../containers/cineMovie';
import Movies from '../containers/movies';
import ScheduleCine from './ScheduleCine';
import Dowloand from './Dowloand'

const MainNav = ({actualPage, navigateTo, data, cinemaSelect, movies }) => {
    switch (actualPage) {
        case 'home':
            return <Main navigateTo={navigateTo}/>;
        case 'signup':
            return <SignUp navigateTo={navigateTo}/>;
        case 'cinemas':
            return <Cines navigateTo={navigateTo} data={data}/>;
        case 'cineMovie':
            return <CineMovie cinemaSelect={cinemaSelect} movies={movies}/>;
        case 'movies':
            return <Movies />;
        case 'scheduleCine':
            return <ScheduleCine navigateTo={navigateTo}/>;
        case 'dowloand':
            return <Dowloand navigateTo={navigateTo}/>
        case 'confirm':
            return <Confirm navigateTo={navigateTo}/>;
        default:
            return null
    }
    return null;
}

export default MainNav;