import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { news } from './../redux/actions/actions';
import { Link } from 'react-router-dom';

class MainSlider extends Component {
    componentDidMount() {
        this.props.news();
    }
  
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let news__slider = this.props.slides.filter(news=>{return news.lang === this.props.lang});
        console.log(news__slider)
        return (


            <div className="main__slider">
                            

                <Slider {...settings}>

                    {news__slider.map(news => <div className="main__slider-item">
                        <img src={"http://uz.orikzor.com/" + news.photo} alt="" />

                        <div className="bottom">
                            <div className="bottom__left">
                                <span className="day">{news.c_d}</span>
                               <div className="d-flex justify-content-center"> <span className="month">{news.c_m}</span>/
                                <span className="year">{news.c_y}</span></div>
                            </div>
                            <div className="bottom__right">
                                <Link to={"/news/" + news.one_id}> {news.name}</Link>
                            </div>
                        </div>

                    </div>)}

                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    slides: state.news.news,
    lang: state.lang.lang
})
export default connect(mapStateToProps, { news })(MainSlider);