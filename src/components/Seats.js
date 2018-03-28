import React from 'react';
import HeaderCines from './HeaderCines';
import MovieDetails from './MovieDetails'

const Seats = () => {
  return (
    <div className="row">
      <HeaderCines 
        firstIcon="fas fa-times"
        title="Butacas"
      />
      <MovieDetails 
        movieTitle="The Shape of Water"
        time="5:00"
        price="0.00"
        seatsNumber="00"
        ticketsNumber="00"
        food="00"
      />
    </div>
  )
}

export default Seats;