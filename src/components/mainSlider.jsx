import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { events_all } from './../redux/actions/actions';
import { Link } from 'react-router-dom';

class MainSlider extends Component {
    componentDidMount() {
        this.props.events_all('ru');
    }
  
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (


            <div className="main__slider">
                            

                <Slider {...settings}>

                    {(this.props.slides) ? this.props.slides.map(slide => <div className="main__slider-item">
                        <img src={"http://uz.orikzor.com/" + slide.photo} alt="" />

                        <div className="bottom">
                            <div className="bottom__left">
                                <span className="day">26</span>
                                <span className="month">июня</span>
                                <span className="year">2019 г</span>
                            </div>
                            <div className="bottom__right">
                                <Link> {slide.name}</Link>
                            </div>
                        </div>

                    </div>) : 'Not found'}

                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    slides: state.events.events,
    lang: state.lang.lang
})
export default connect(mapStateToProps, { events_all })(MainSlider);