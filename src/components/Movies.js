import React, { Component} from 'react';
import HeaderCines from './HeaderCines';
import DetailsMovie from './DetailsMovie';
import Footer from './Footer';

class Movies extends Component {
    componentWillMount() {
        this.props.getMovie(this.props.movieSelect)
    }

    render() {
        const { data, movieData, movieSelect, navigateTo, getMovie } = this.props;
        return(
            <div >
                <HeaderCines navigateTo={navigateTo}/>
                <DetailsMovie movieData={movieData} navigateTo={navigateTo}/>
            </div>
        )
    }
    
};

export default Movies;