import React from 'react';
import Main from './Main';
import SignUp from './SignUp'
import Cines from './Cines';
import Confirm from './Confirm';

const MainNav = ({actualPage, navigateTo, data}) => {
    switch (actualPage) {
        case 'home':
            return <Main navigateTo={navigateTo}/>;
        case 'signup':
            return <SignUp navigateTo={navigateTo}/>;
        case 'cinemas':
            return <Cines navigateTo={navigateTo} data={data}/>;
        case 'confirm':
            return <Confirm />;
        default:
            return null
    }
    return null;
}

export default MainNav;