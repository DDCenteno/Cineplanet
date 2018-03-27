import React from 'react';

const Header = () => (
    
    <div className="col-12 ">
    <div className="row justify-content-between">
        <div className="col-8 pl-0">
            <h4 className="text-blue font-weight-bold m-2 ">Cineplanet</h4>
        </div>
        <div className="col-3 mt-2">
        <div className="row justify-content-between pb-2">
            <i className="fas fa-search fa-2x text-blue"></i>
            <i className="far fa-user-circle fa-2x text-blue"></i>
        </div>
        </div>
    </div>
    </div>
    
);

export default Header;