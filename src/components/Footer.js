import React from 'react';

const Footer = ({ navigateTo }) => (
    <div className="col-12 mt-3">
        <div className="row justify-content-center align-items-center">
            <div className="col-4 text-blue" onClick={() => navigateTo('home')}>
                <div className="d-flex flex-column align-items-center">
                    <i className="fas fa-home fa-2x"></i>
                    <p>Inicio</p>
                </div>
            </div>
            <div className="col-4 text-blue" onClick={() => navigateTo('cinemas')}>
                <div className="d-flex flex-column align-items-center">
                    <i className="fas fa-video fa-2x"></i>
                    <p>Cines</p>
                </div>
            </div>
            <div className="col-4 text-blue">
                <div className="d-flex flex-column align-items-center">
                    <i className="fas fa-ellipsis-h fa-2x"></i>
                    <p>Más</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;