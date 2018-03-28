import React from 'react';


const ContentCines = ({ dataMoviesCinema, navigateTo, id }) => (
    <div className="col-12">
    <div className="row justify-content-center align-items-center" >
        {dataMoviesCinema.map( movie => 
        <figure className="col-6" key={movie._id} onClick={() => navigateTo('movies', id, movie._id)}>
            <img className="" src={movie.imgver} alt={movie.name} style={{height: '200px', width: '150px'}}/>
        </figure>
        )}
        </div>
      </div>
);

export default ContentCines;