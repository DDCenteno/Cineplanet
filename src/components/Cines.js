import React from 'react';

const Cines = () => {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="col-6 d-inline-block">
          <span><i className="fas fa-chevron-left text-blue"></i></span>
          <h4 className="ml-2 d-inline-block text-blue font-weight-bold">Cines</h4>
        </div>
        <div className="float-right">
          <span><i className="fas fa-search fa-2x text-blue"></i></span>
          <span className="ml-4"><i className="far fa-user-circle fa-2x text-blue"></i></span>
        </div> 
      </div>
      <div className="col-12 mt-4">
        <div className="col-6 d-inline-block text-center">
          <span><i className="fas fa-map-marker-alt"></i></span>
          <p>Ciudad</p>
        </div>
        <div className="col-6 d-inline-block text-center">
          <span><i class="fas fa-video"></i></span>
          <p>Tipo de salas</p>
        </div>
      </div>
      <div className="col-12 mt-5">
        <div className="d-flex justify-content-around align-items-center movies-list-container">
        <div className="text-center d-flex align-items-center">
          <span><i class="fas fa-heart"></i></span>
          <div className="d-inline-block">
            <h6 className="text-blue font-weight-bold">Cineplanet Salaverry</h6>
            <span>Av. San Felipe Salaverry s/n</span>
          </div>
        </div>
        <span className=""><i class="fas fa-chevron-right"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Cines;

