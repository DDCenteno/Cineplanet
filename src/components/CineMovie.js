import React, { Component } from 'react';
import HeaderCines from './HeaderCines';
import NavCine from './NavCine';
import ContentCine from './ContentCine';

class CineMovie extends Component {
    componentWillMount() {
        this.props.getMovies()
    }

    render(){
        const { cinemaSelect, movies, data, navigateTo } = this.props;
        const dataMoviesCinema = []

        data.products.map( cinema => {
            if (cinema._id === cinemaSelect) {
                cinema.movies.map( idMovie => {
                    if (movies.movies) {
                        movies.movies.map( movie => {
                            if (movie._id === idMovie) {
                                dataMoviesCinema.push(movie);
                            }
                        })
                    }
                })
            }
        } );
        return(
            <div>
                <HeaderCines navigateTo={navigateTo}/>
                <NavCine />
                <ContentCine dataMoviesCinema={dataMoviesCinema} navigateTo={navigateTo} id={cinemaSelect}/>
            </div>)
    }
};

export default CineMovie;