import React from 'react';

const icons = ['far fa-id-badge', 'fas fa-ticket-alt', 'fas fa-utensils', 'fas fa-credit-card'];

const RunwayProces = () => (
        <div className="d-flex justify-content-center align-items-center">
            {icons.map( i => 
            <div className="col-3" key={i}>
                <div className="d-flex flex-column align-items-center border">
                    <i className={ i + ' fa-2x text-blue'}></i>
                    <p>00</p>
                </div>
            </div>
            )}     
        </div>
);

export default RunwayProces;