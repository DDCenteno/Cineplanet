import React from 'react';

const MovieDetails = ({movieTitle, time, price, seatsNumber, ticketsNumber, food}) => {
  return (
    <div className="col-12">
      <div className="col-12 info-movie">
        <div className="text-blue d-flex justify-content-center">
          <h4 className="font-weight-bold">{movieTitle}</h4>
          <div className="some-info-container">
            <div className="time-container">
              <i className="far fa-clock"></i>{' '}
              <span className="time">{time}</span>
            </div>
            <button className="price-button"><span><i className="fas fa-shopping-cart"></i></span><span>$/. {price}</span></button>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-around movie-details">
        <div className="movie-details-icons-container">
          <img src="sillon.svg" alt="Icon 1"/>
          <div className="text-center text-blue font-weight-bold">{seatsNumber}</div>
        </div>
        <div className="movie-details-icons-container">
          <img src="entradas.svg" alt="Icon 2"/>
          <div className="text-center text-blue font-weight-bold">{ticketsNumber}</div>
        </div>
        <div className="movie-details-icons-container">
          <img src="palomitas-de-maiz.svg" alt="Icon 3"/>
          <div className="text-center text-blue font-weight-bold">{food}</div>
        </div>
        <div className="movie-details-icons-container">
          <img src="tarjeta-de-credito.svg" alt="Icon 4"/>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;