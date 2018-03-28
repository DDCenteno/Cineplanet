import React from 'react';
import HeaderCines from './HeaderCines';
import MovieDetails from './MovieDetails';
import RunwayContent from './RunwayContent';

const Runway = () => (
    <div>
        <HeaderCines 
            firstIcon="fas fa-times"
            title="Pago"
        />
        <MovieDetails 
        movieTitle="The Shape of Water"
        time="5:00"
        price="14.00"
        seatsNumber="01"
        ticketsNumber="01"
        food="00"
      />
        <RunwayContent/>
    </div>
);

export default Runway;