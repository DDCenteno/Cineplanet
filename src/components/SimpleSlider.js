import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="coverPage">
                        <div className="position-absolute" style={{ bottom: '5rem' }}>
                            <div className="col-12">
                                <h3 className="text-light m-0">Ready Player One</h3>
                                <h5 className="text-light m-0">Encuentra y heredaras su fortuna</h5>
                                <button type="button" className="btn btn-dark mt-4 pl-4 pr-4 btn-pink">Trailer <i className="fas fa-play-circle"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className="coverPage1">
                    <div className="position-absolute" style={{ bottom: '5rem' }}>
                            <div className="col-12">
                                <h3 className="text-light m-0">Yo, Tonya</h3>
                                <button type="button" className="btn btn-dark mt-4 pl-4 pr-4 btn-pink">Trailer <i className="fas fa-play-circle"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className="coverPage2">
                    <div className="position-absolute" style={{ bottom: '5rem' }}>
                            <div className="col-12">
                                <h3 className="text-light m-0">Titanes del Pacífico</h3>
                                <h5 className="text-light m-0">La insurrección</h5>
                                <button type="button" className="btn btn-dark mt-4 pl-4 pr-4 btn-pink">Trailer <i className="fas fa-play-circle"></i></button>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}