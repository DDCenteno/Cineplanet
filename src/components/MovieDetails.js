import React from 'react';

const MovieDetails = ({movieTitle, time, price, seatsNumber, ticketsNumber, food}) => {
  return (
    <div className="col-12 info-movie">
      <div className="text-blue d-flex justify-content-center">
        <h5 className="font-weight-bold">{movieTitle}</h5>
        <div className="some-info-container">
          <div className="time-container">
          <i className="far fa-clock"></i>{' '}
          <span className="time">{time}</span>
          </div>
          <button className="price-button"><span><i className="fas fa-shopping-cart"></i></span><span>$/. {price}</span></button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;