import React from 'react';

const Footer = () => (
    <div className="col-12 mb-2">
        <div className="row justify-content-center">
        <div className="col-4">
            <i className="fas fa-home fa-2x text-blue"></i>
            <p>Inicio</p>
            </div>
        <div className="col-4">    
            <i className="fas fa-video fa-2x text-blue"></i>
            <p>Cines</p>
            </div>
        <div className="col-4">
            <i className="fas fa-ellipsis-h fa-2x text-blue"></i>
            <p>Más</p>
            </div>
        </div>
    </div>
);

export default Footer;