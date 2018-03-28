import React from 'react';
import HeaderCines from './HeaderCines';
import MovieDetails from './MovieDetails';

const Tickets = ({currentTicketPrice}) => {
  return (
    <div className="row">
      <HeaderCines 
        firstIcon="fas fa-times"
        title="ENTRADAS"
      />
      <MovieDetails
        movieTitle="The Shape of Water"
        time="5:00"
        price="0.00"
        seatsNumber="01"
        ticketsNumber="01"
        food="00"
      />
      <div className="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page">Entradas</li>
            <li class="breadcrumb-item active">Canjea tus códigos</li>
          </ol>
        </nav>
      </div>
      <div className="col-12">
        <h5 className="text-center font-weight-bold text-blue">Entradas Generales</h5>
        <form>
          <div className="form-group">
            <label className="ticket-label" htmlFor="exampleInputEmail1">GENERAL SOL</label>
            <input type="email" className="form-control text-blue font-weight-bold tickets-price-input" id="exampleInputEmail1" value={'s/. ' + currentTicketPrice} aria-describedby="emailHelp" placeholder="" />
            <small id="emailHelp" className="form-text font-weight-bold text-danger ticket-small">Precio más bajo</small>
          </div>
        </form>
      </div>
      <button className="continue-button text-white">CONTINUAR</button>
    </div>
  )
}

export default Tickets;