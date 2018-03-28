import React from 'react';
import NavCineDetail from './NavCineDetail';

const NavCine = () => (
    <div className="col-12">
        <div className="col-12 d-inline-block">
        <div className="row justify-content-center align-items-center border-bottom">
            <span><i className="fas fa-heart"></i></span>
            <h5 className="ml-2 d-inline-block text-blue font-weight-bold text-center">Cineplanet Alcazar</h5>
        </div> 
        </div>
        <NavCineDetail/>
    </div>
);

export default NavCine;