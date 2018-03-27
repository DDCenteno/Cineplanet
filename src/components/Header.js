import React from 'react';

const Header = () => (
    
    <div className="col-12 ">
    <div className="row justify-content-between">
        <div className="col-8 mt-2">
            <h3 className="text-blue font-weight-bold">Cineplanet</h3>
        </div>
        <div className="col-3 mt-2">
        <div className="row justify-content-between">
            <i className="fas fa-search fa-2x text-blue"></i>
            <i className="far fa-user-circle fa-2x text-blue"></i>
        </div>
        </div>
    </div>
    </div>
    
);

export default Header;