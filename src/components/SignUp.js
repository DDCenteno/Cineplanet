import React from 'react';

const SignUp = ({ navigateTo }) => (
  <div className="row">
    <div className="col-12">
      <h4 onClick={() => navigateTo('home')} className="text-blue font-weight-bold m-2 "><i className="fas fa-chevron-left"></i> Inicia Sesión</h4>
      <div className="col-12">
        <div className="row justify-content-center">
          <i className="far fa-user-circle fa-7x text-blue m-4"></i>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="form-group col-12">
            <input type="text" className="form-control border-bottom border-0" id="formGroupExampleInput" placeholder="Número de DNI, RUC, CE, Pasaporte" />
            <span className="position-absolute rounded-circle back-blue p-1 pl-2 pr-2 text-light sign-up-info font-weight-bold">!</span>
          </div>
          <div className="form-group col-12">
            <input type="text" className="form-control border-bottom border-0" id="formGroupExampleInput2" placeholder="Contraseña" />
            <span className="position-absolute rounded-circle back-blue p-1 pl-2 pr-2 text-light sign-up-info font-weight-bold">?</span>
          </div>
        </div>
      </div>
      <div className="col-12">
        <span>¿Olvidaste tu contraseña?</span>
        <div className="d-flex flex-column align-items-center pb-4 border-bottom">
          <button type="button" className="btn btn-dark mt-4 pl-5 pr-5 btn-pink border-in border-0">Ingresar</button>
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column align-items-center">
          <h5 className="text-blue pt-4">¿No eres SocioPlanet?</h5>
          <span className="text-center text-dark socioPlanet">Uniendote a nuestro programa SocioPlanet podrás acumular puntos en cada visita que realices u gozas de grandes beneficios.</span>
          <a href="more" className="text-dark underline socioPlanet">Conoce más sobre el programa</a>
          <button type="button" className="btn btn-dark mt-4 pl-5 pr-5 back-blue border-in border-0">Unete</button>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;