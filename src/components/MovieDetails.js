import React from 'react';

const MovieDetails = ({movieTitle, time, price, seatsNumber, ticketsNumber, food}) => {
  return (
    <div className="col-12">
      <div className="">
        <h5>{movieTitle}</h5>
      </div>
    </div>
  )
}

export default MovieDetails;