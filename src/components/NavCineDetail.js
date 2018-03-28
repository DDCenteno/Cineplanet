import React from 'react';

const NavCineDetail = ({navigateTo}) => (
    <div className="col-12 d-inline-block">
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-6">
                <div className="row justify-content-center align-items-center" onClick={() => navigateTo('movies')}>
                    <h6 className="ml-2 d-inline-block text-blue font-weight-bold">Detalle</h6>
                </div>
            </div>
            <div className="col-6">
                <div className="row justify-content-center align-items-center" onClick={() => navigateTo('scheduleCine')}>
                    <h6 className="ml-2 d-inline-block text-blue font-weight-bold">Compra</h6>
                </div>
            </div>
        </div>
    </div>
);

export default NavCineDetail; 