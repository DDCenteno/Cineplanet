import React from 'react';

const HeaderCines = ({ navigateTo }) => (
    <div className="col-12 border">
        <div className="col-6 d-inline-block">
          <span onClick={() => navigateTo('home')}><i className="fas fa-chevron-left text-blue"></i></span>
          <h4 className="ml-2 d-inline-block text-blue font-weight-bold">Cines</h4>
        </div>
        <div className="float-right">
          <span><i className="fas fa-search fa-2x text-blue"></i></span>
          <span onClick={() => navigateTo('signup')} className="ml-4"><i className="far fa-user-circle fa-2x text-blue"></i></span>
        </div> 
      </div>
);

export default HeaderCines;