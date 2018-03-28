import React from 'react';
import IconsHeader from './IconsHeader';

const Header = () => (
    <div className="col-12 ">
        <div className="row justify-content-between">
            <div className="col-8 pl-0">
                <h4 className="text-blue font-weight-bold m-2 ">Cineplanet</h4>
            </div>
            <IconsHeader/>
        </div>
    </div>
);

export default Header;