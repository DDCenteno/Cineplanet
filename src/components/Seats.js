import React from 'react';
import HeaderCines from './HeaderCines';
import MovieDetails from './MovieDetails'
import SeatImage from './SeatImage';

const Seats = ({screenIcon}) => {
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
      <div className="col-12 d-flex justify-content-center align-items-start">
        <img className="screen-icon" src={screenIcon} alt={screenIcon}/>
      </div>
      <div className="col-12 seats-container">
        <div className="seats-container-hr">
          <hr className="seats-hr"/>
        </div>
        <div>
          {/* <div className="letters-row">
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>I</div>
            <div>J</div>
            <div>K</div>
          </div> */}
          <div id="seat-row-1">
            <span>A</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-2">
            <span>B</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-3">
            <span>C</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-4">
            <span>D</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-5">
            <span>E</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-6">
            <span>F</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-7">
            <span>G</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
          <div id="seat-row-8">
            <span>H</span>
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
            <SeatImage />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div>
          <div className="text-uppercase">disponible</div>
          <div className="text-uppercase">ocupado</div>
        </div>
        <div>
          <div className="text-uppercase">seleccionado</div>
          <div className="text-uppercase">silla de ruedas</div>
        </div>
      </div>
    </div>
  )
}

export default Seats;