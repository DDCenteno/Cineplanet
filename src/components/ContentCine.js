import React from 'react';

const movies = ['../assets/images/portada.jpg', 'assets/images/portada1.jpg', 'assets/images/portada2.jpg'];

const ContentCines = () => (
    <div className="col-12">
    <div className="row justify-content-center align-items-center" >
        {movies.map( m => 
        <figure className="col-6" key={m}>
            <img className="" src={m} alt="Movie" style={{height: '200px', width: '150px'}}/>
            </figure>
        )}
        </div>
      </div>
);

export default ContentCines;