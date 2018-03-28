import React from 'react';
import HeaderCines from './HeaderCines';
import Footer from './Footer';

const Cines = () => {
  return (
    <div className="row mt-4">
      <HeaderCines 
        firstIcon="fas fa-chevron-left"
        title="Cines"
      />
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
      <div className="col-12 mt-5">
        <div className="d-flex justify-content-around align-items-center movies-list-container">
        <div className="text-center d-flex align-items-center">
          <span><i className="fas fa-heart"></i></span>
          <div className="d-inline-block ml-3 mr-3">
            <h6 className="text-blue font-weight-bold">Cineplanet Salaverry</h6>
            <span>Av. San Felipe Salaverry s/n</span>
          </div>
        </div>
        <span className=""><i className="fas fa-chevron-right"></i></span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cines;

