import React from 'react';

const DetailsCineContent = () => (
    <div>
        <h4 className="ml-2 text-blue font-weight-bold">Ubicación</h4>
        <span>Av. Santa Cruz 814 - 816</span>
        <div className="col-12">
            <img src="assets/images/map.PNG" alt="Map" style={{ width: '100%' }} />
        </div>
        <div className="col-12 d-inline-block">
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-6">
                    <h4 className="ml-2 d-inline-block text-blue text-left font-weight-bold">Salas</h4>                </div>

                <div className="col-6">
                    <h5 className="ml-2 d-inline-block text-blue font-weight-bold float-right">Tipo</h5>
                </div>
            </div>
        </div>
        <div className="col-12 d-inline-block">
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-4">
                    <p>8 Salas</p>
                </div>
                <div className="col-8">
                    <div className="float-left d-flex justify-content-between align-items-center">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">2D</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">REGULAR</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">3D</p>
                    </div>
                </div>
            </div>
            <h6 className="ml-2 d-inline-block text-blue text-left font-weight-bold">Precios Boletería</h6>
        </div>
        <div className="col-12 d-inline-block">
            <table style={{ width: '100%' }}>
                <thead>
                <tr className="text-blue text-center border-blue border-top-0 border-left-0 border-right-0">
                    <th className=" border-blue border-top-0 border-left-0 border-bottom-0">Tipos de salas</th>
                    <th className=" border-blue border-top-0 border-left-0 border-bottom-0">General</th>
                    <th >Niños y Adultos <br /> mayores de 60</th>
                </tr>
                </thead>
                <tbody>
                <tr className=" text-center  border-blue border-top-0 border-left-0 border-right-0">
                    <th className=" border-blue border-top-0 border-left-0 border-bottom-0">3D</th>
                    <td className=" border-blue border-top-0 border-left-0 border-bottom-0">S/ 18.50</td>
                    <td>S/ 18.50</td>
                </tr>
                <tr className=" text-center">
                    <th className=" border-blue border-top-0 border-left-0 border-bottom-0">2D</th>
                    <td className=" border-blue border-top-0 border-left-0 border-bottom-0">S/ 15.00</td>
                    <td>S/ 15.00</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="col-12 d-inline-block">
            <div className="d-flex justify-content-center align-items-center">
                <i className="far fa-smile fa-2x mr-2"></i>
                <p>Recuerda que comprando Online <br /> <span className="font-weight-bold">Ahorras en tus boletos</span></p>
            </div>
        </div>
        <div className="col-12 d-inline-block back-blue">
            <div className="d-flex flex-column text-light">
                <h5 className="ml-2 d-inline-block text-left">Infotmación Importante</h5>
                <p className="text-justify">El horario de apertura de cada uno de nuestrros cines es variable,<br/>
                ten como referencia 20 minutos antes de la primera función <br/>
                programa del día del Cineplanet que elijas.
                </p>
                <p className="text-justify">El horario de la función que se muestra, indica el inicio de,<br/>
                proyección de publicidad y avances de los próximos estrenos<br/>
                luego de gustos, inicia la película.
                </p>
                <p className="text-justify">Las funciones en los horarios podrian cambiar sin previo aviso.</p>
            </div>
        </div>
    </div>
);

export default DetailsCineContent;
