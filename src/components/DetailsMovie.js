import React from 'react';
import NavCineDetail from './NavCineDetail';

const DetailsMovie = ({movieData, navigateTo}) => {
    return(
    <div className="col-12">
        <img src={movieData.movie ? movieData.movie.imghor : 'esperando imagen'} style={{ width: '100%' }} alt="Movie" />
        <NavCineDetail navigateTo={navigateTo}/>
        <div className="col-12 d-inline-block">
            <div className="d-flex flex-column border-blue border-top-0 border-left-0 border-right-0">
                <h5 className="ml-2 d-inline-block text-left text-blue">Sinopsis</h5>
                <p className="text-justify text-dark text-justify">{movieData.movie ? movieData.movie.description : 'esperando sipnosis'}
                </p>
            </div>
        </div>
        <div className="col-12 d-inline-block mt-3 mb-3">
            <div className="d-flex flex-column border-blue border-top-0 border-left-0 border-right-0">
                <h4 className="pl-3">{movieData.movie ? movieData.movie.director : 'cargando'}</h4>
            </div>
        </div>
        <div className="col-12 d-inline-block">
            <div className="row justify-content-start">
                <div className="col-12 border-blue border-top-0 border-left-0 border-right-0 pb-2">
                    <p className="pt-0 pb-0 pl-1 mb-0">Idioma</p>
                    <div className="float-left d-flex justify-content-between align-items-center ">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle text-uppercase">{movieData.movie ? movieData.movie.language[0] : 'cargando'}</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle text-uppercase">{movieData.movie ? movieData.movie.language[1] : 'cargando'}</p>
                    </div>
                </div>
                <div className="col-12 pt-2">
                    <p className="pt-0 pb-0 pl-1 mb-0">Disponible</p>
                    <div className="float-left d-flex justify-content-between align-items-center">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">{movieData.movie ? movieData.movie.roomType : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default DetailsMovie;