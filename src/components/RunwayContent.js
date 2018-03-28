import React from 'react';

import image from '../assets/images/tarjetasPago.png'

const RunwayContent = () => (
  <div>
    <div class="col-12">
      <img style={{ width: '100%' }} src={image} alt="Tarjetas de pago" />
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="NÚMERO DE TARJETA" />
        <div class="col-12">
          <div class="row justify-content-center mt-2">
            <button type="button" class="btn back-blue text-white m-2">CRÉDITO</button>
            <button type="button" class="btn btn-outline-dark m-2">DÉBITO</button>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-6 mt-3">
              <input type="text" class="form-control" placeholder="MM/AA" />
            </div>
            <div class="col-6 mt-3">
              <input type="text" class="form-control" placeholder="CVV" />
            </div>
            <div class="col-12 mt-3">
              <input type="text" class="form-control" placeholder="NOMBRE DE TITULAR DE TARJETA" />
            </div>
            <div class="col-12 mt-3">
              <input type="text" class="form-control" placeholder="CORREO ELECTRÓNICO" />
            </div>
            <div class="col-3 mt-3">
              <input type="text" class="form-control" placeholder="DNI" />
            </div>
            <div class="col-9 mt-3">
              <input type="text" class="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <p>Algunas tarjetas de débito con código CVV podrían <br/>
          ser rechazadas por la plataforma de pago que <br/>
          utilizamos debito a politicas de seguridad de banco.
          </p>
          <p>El cobro de la transacción se realizará en Nuevos<br/>
          Soles. Si la cuenta asociada a tu tarjeta es en<br/>
          dólares , el tipo de cambio utilizado será el de tu <br/>
          banco.
          </p>
          <button type="button" class="btn back-blue btn-lg btn-block">PAGAR</button>
        </div>
      </div>
    </div>
  </div>
);

export default RunwayContent;