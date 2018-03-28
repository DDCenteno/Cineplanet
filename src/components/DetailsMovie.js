import React from 'react';
import NavCineDetail from './NavCineDetail';

const DetailsMovie = () => (
    <div className="col-12">
        <img src="assets/images/movie.PNG" style={{ width: '100%' }} alt="Movie" />
        <NavCineDetail />
        <div className="col-12 d-inline-block">
            <div className="d-flex flex-column border-blue border-top-0 border-left-0 border-right-0">
                <h5 className="ml-2 d-inline-block text-left text-blue">Sinopsis</h5>
                <p className="text-justify text-dark text-justify">En un inquietante laboratorio de alta<br />
                    seguridad, durante la Guerra Fría, se<br />
                    produce una conexión insólita entre dos mundos aparentemente alejados.
                </p>
            </div>
        </div>
        <div className="col-12 d-inline-block mt-3 mb-3">
            <div className="d-flex flex-column border-blue border-top-0 border-left-0 border-right-0">
                <h4 className="pl-3">Guillermo del Toro</h4>
            </div>
        </div>
        <div className="col-12 d-inline-block">
            <div className="row justify-content-start">
                <div className="col-12 border-blue border-top-0 border-left-0 border-right-0 pb-2">
                    <p className="pt-0 pb-0 pl-1 mb-0">Idioma</p>
                    <div className="float-left d-flex justify-content-between align-items-center ">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">SUB</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">DOBLE</p>
                    </div>
                </div>
                <div className="col-12 pt-2">
                    <p className="pt-0 pb-0 pl-1 mb-0">Disponible</p>
                    <div className="float-left d-flex justify-content-between align-items-center">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">REGULAR</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">3D</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">2D</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">XT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DetailsMovie;