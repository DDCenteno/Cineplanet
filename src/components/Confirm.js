import React from 'react';
import FinalHeader from './FinalHeader';

const Confirm = () => {
  return (
    <div className="row">
      <FinalHeader />
      <div className="col-12 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center final-message font-weight-bold">
          <p>Muchas gracias por comprar en Cineplanet!</p>
          <p>Nos vemos en el cine!</p>
        </div>
        <div className="glasses">
          <img src="3d-glasses.svg" alt="3DGlasses"></img>
        </div>
      </div>
      {/* <div className="col-12">
       
      </div> */}
    </div>
  )
}

export default Confirm;