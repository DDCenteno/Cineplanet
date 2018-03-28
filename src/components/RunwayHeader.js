import React from 'react';
import IconsHeader from './IconsHeader';

const RunwayHeader = props => (
    <div className="col-12 ">
        <div className="row justify-content-between">
            <div className="col-8 pl-0">
                <h4 className="text-blue font-weight-bold m-2"><i className="fas fa-times fa-sm pr-1"></i>{props.name}</h4>
            </div>
            <IconsHeader />
        </div>
    </div>
);

export default RunwayHeader;