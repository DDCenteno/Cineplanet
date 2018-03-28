import React from 'react';

const HeaderCines = ({firstIcon, title}) => (
    <div className="col-12">
        <div className="col-6 d-inline-block">
          <span><i className={firstIcon + " text-blue"}></i></span>
          <h4 className="ml-2 d-inline-block text-blue font-weight-bold">{title}</h4>
        </div>
        <div className="float-right">
          <span><i className="fas fa-search fa-2x text-blue"></i></span>
          <span className="ml-4"><i className="far fa-user-circle fa-2x text-blue"></i></span>
        </div> 
      </div>
);

export default HeaderCines;