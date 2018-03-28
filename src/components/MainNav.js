import React from 'react';
import Main from './Main';
import SignUp from './SignUp'
import Cines from './Cines';
import Confirm from './Confirm';

const MainNav = ({actualPage, navigateTo}) => {
    switch (actualPage) {
        case 'home':
            return <Main />;
        case 'signup':
            return <SignUp />;
        case 'cinemas':
            return <Cines />;
        case 'confirm':
            return <Confirm />;
        default:
            return null
    }
    return null;
}

export default MainNav;