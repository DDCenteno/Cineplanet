import React from 'react';

const Dowloand = () => (
    <div>
        <div className="col-12">
            <h4 className="text-blue font-weight-bold text-center">Cineplanet</h4>
        </div>
            <div className="row align-items-center h-75 back-blue">
                <div className="col-10 bg-light offset-1 pt-5 pb-4 border-in-middle">
                    <p className="text-center font-weight-bold pb-3  border-bottom">Tu transacción a sido aceptada! <br />
                        Dínos sí deseas:</p>
                    <button type="button" className="mt-2 col-12 btn btn-outline-dark mb-3">Enviar Código QR a correo</button>
                    <button type="button" className="col-12 btn btn-outline-dark mb-3">Descargarlo como PDF</button>
            </div>
        </div>
    </div>
);

export default Dowloand;