import React from 'react';

const subtitle = ['Cartelera', 'Detalle', 'Comprar'];

const NavCineDetail = () => (
    <div className="col-12 d-inline-block">
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-6">
                <div className="row justify-content-center align-items-center">
                    <h6 className="ml-2 d-inline-block text-blue font-weight-bold">{subtitle[0]}</h6>
                </div>
            </div>
            <div className="col-6">
                <div className="row justify-content-center align-items-center">
                    <h6 className="ml-2 d-inline-block text-blue font-weight-bold">{subtitle[1]}</h6>
                </div>
            </div>
        </div>
    </div>
);

export default NavCineDetail; 