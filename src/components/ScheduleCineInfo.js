import React from 'react';
import NavCineDetail from './NavCineDetail';

const ScheduleCineInfo = ({navigateTo}) => {
    return(
    <div >
        <img src="assets/images/movie.PNG" style={{ width: '100%' }} alt="Movie" />
        <NavCineDetail navigateTo={navigateTo}/>
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-6">
                <div className="d-flex flex-column align-items-center border">
                    <i className="fas fa-video fa-2x text-blue"></i>
                    <p>Alcazar</p>
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex flex-column align-items-center border">
                    <i className="far fa-calendar-alt fa-2x text-blue"></i>
                    <p>Hoy</p>
                </div>
            </div>
        </div>
        <div className="col-12">
        <div className="row justify-content-start">
                <div className="col-12 border-blue border-top-0 border-left-0 border-right-0 p-3 ">
                    <p className="pt-0 pb-0 pl-1 mb-0">2D, REGULAR, SUB</p>
                    <div className="float-left d-flex justify-content-between align-items-center ">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">2:00 PM</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">3:30 PM</p>
                        <p className="m-1 pl-2 pr-2 border-blue border-in-middle">5:00 PM</p> 
                    </div>
                </div>
                <div className="col-12 pt-2 mb-4">
                    <p className="pt-0 pb-0 pl-1 mb-0">3D, REGULAR, SUB</p>
                    <div className="float-left d-flex justify-content-between align-items-center">
                        <p className="pl-2 pr-2 m-1 border-blue border-in-middle">6:00 PM</p>
                        
                    </div>
                </div>
            </div>
            </div>
    </div>
    )
};

export default ScheduleCineInfo;