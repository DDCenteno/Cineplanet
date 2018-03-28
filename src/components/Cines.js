import React from 'react';
import HeaderCines from './HeaderCines';

const CinemaDiv = ({ id, cinema, navigateTo }) => {
  return(
      <div className="d-flex justify-content-around align-items-center movies-list-container m-3">
        <div className="text-center d-flex align-items-center">
          <span><i className="fas fa-heart"></i></span>
          <div className="d-inline-block ml-3 mr-3">
            <h6 className="text-blue font-weight-bold">{cinema.name}</h6>
            <span>{cinema.location}</span>
          </div>
        </div>
        <span onClick={() => navigateTo('cineMovie', id)} className=""><i className="fas fa-chevron-right"></i></span>
      </div>
  )
} 

const Cines = ({navigateTo, data}) => {
  const cines = data.products.map( cinema => (
    <CinemaDiv id={cinema._id} key={cinema._id} cinema={cinema} navigateTo={navigateTo}/>
  ))
  return (
    <div className="row mt-4">
      <HeaderCines navigateTo={navigateTo}/>
      <div className="col-12 mt-4">
        <div className="col-6 d-inline-block text-center">
          <span><i className="fas fa-map-marker-alt"></i></span>
          <p>Ciudad</p>
        </div>
        <div className="col-6 d-inline-block text-center">
          <span><i className="fas fa-video"></i></span>
          <p>Tipo de salas</p>
        </div>
      </div>
      <div className="col-12 mt-2">
        {cines}
      </div>
    </div>
  )
}

export default Cines;

