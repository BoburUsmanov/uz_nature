import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';

 class PhotoSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            padding:50
        };
        return (
            <Slider {...settings} className="padding-slider">
                {this.props.photos.map(photo=> 
                <div className="main__photo-item ">
                    <img src={"http://uz.orikzor.com/"+photo.photo} alt=""/>
                    <div className="box">
                        <div className="box-text">
                            {photo.name}
                        </div>
                        <div className="box-date">
                            {photo.created_at}
                        </div>
                    </div>
                </div>
                    )}
               
            </Slider>
        )
    }
}

const mapStateToProps = state => ({
    lang:state.lang.lang,
    photos:state.events.events
})
export default connect(mapStateToProps)(PhotoSlider)