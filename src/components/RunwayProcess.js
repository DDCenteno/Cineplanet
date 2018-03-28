import React from 'react';

const icons = [{ icon: 'far fa-id-badge', num: '01' },
{ icon: 'fas fa-ticket-alt', num: '01' },
{ icon: 'fas fa-utensils', num: '00' },
{ icon: 'fas fa-credit-card', num: '00' }];

const RunwayProcess = () => (
    <div>
        <div className="col-12">
            <h4 className="ml-2 d-inline-block text-blue text-left font-weight-bold">The Shape of Water</h4>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            {icons.map(i =>
                <div className="col-3" key={i.icon}>
                    <div className="d-flex flex-column align-items-center border">
                        <i className={i.icon + ' fa-2x text-blue'}></i>
                        <p>{i.num}</p>
                    </div>
                </div>
            )}
            
        </div>
    </div>
);

export default RunwayProcess;