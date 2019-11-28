import React, { Component } from 'react'
import Title from './title';
import { connect } from 'react-redux';
import Ccalendar from './calendar';
import { news } from './../../redux/actions/actions';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import FulCalendar from '../FulCalendar';

class Sidebar extends Component {
    componentDidMount() {
        this.props.news();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay:true
        };

        let most = this.props.newss.filter(n => {
            return n.lang === this.props.lang;
          });
        return (
            <div className="sidebar">
                <div className="sidebar__calendar">
                    <Title title="КалендаРь событий" />
                    <FulCalendar />
                    <div className="text-right">
                        <Link to="/events" className="general__anchor">Все событий</Link>
                    </div>
                </div>
                <div className="sidebar__popular">
                    <Title title="Популярные новости" />
                    {
                        most.map(m =>
                            (<div className="sidebar__news">
                                <p className="sidebar__news-text">
                                <Link
                                to={"/news/" + m.one_id}
                                className="news-link"
                              >
                               {m.name}
                              </Link>
                                    
                                </p>
                                <div className="d-flex justify-content-between">
                                    <span className="sidebar__news-category">Новости</span>
                                    <span className="sidebar__news-date">
                                        <span className="day"> {m.c_d + "." + m.c_m + "." + m.c_y}</span>
                                        <span className="fa fa-eye"></span> 15
                                </span>
                                </div>
                            </div>
                        : 'no news')) 
                    }
                    <div className="text-right">
                        <Link to="/news" className="general__anchor">Все новости</Link>
                    </div>
                </div>
                <div className="sidebar__video">
                    <Title title="Видеогалерея" />
                    <div className="sidebar__video-item">

                        <video preload="auto" id="svideo">
                            <source src="/uploads/flowers.mp4" type="video/mp4" />
                        </video>
                        <img src="/img/play.png" />

                        <div className="linear"></div>

                        <h2 className="sidebar__video-title">
                            Как отказаться от пластика? Пять простых начальных шагов, доступных каждому.
                                </h2>

                    </div>

                    <div className="text-right">
                        <Link to="/photogallery" className="general__anchor">Все видео</Link>
                    </div>
                </div>
                <div className="sidebar__photo">
                    <Title title="Фотогалерея" />
                    <div className="row sidebar__photo-content">
                        <div className="col-4">
                            <img src="/img/photo/1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/img/photo/2.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/img/photo/3.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/img/photo/4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/img/photo/5.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/img/photo/6.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="text-right">
                        <Link to="/photogallery" className="general__anchor">Все фото</Link>
                    </div>

                    <div className="sidebar__slider">
                        <Slider {...settings}>
                            <div className="sidebar__slider-item facebook">
                                <a href="http://www.facebook.com" target="_blank"><span className="social-logo"><i className="fa fa-facebook"></i>
                                </span><span className="social__text">Следите за нами в Facebook</span></a>
                            </div>

                            <div className="sidebar__slider-item instagram">
                            <a href="http://www.instagram.com" target="_blank"><span className="social-logo"><i className="fa fa-instagram"></i>
                                </span><span className="social__text">Следите за нами в Instagram</span></a>
                            </div>

                            <div className="sidebar__slider-item telegram">
                            <a href="http://www.instagram.com" target="_blank"><span className="social-logo"><i className="fa fa-telegram"></i>
                                </span><span className="social__text">Следите за нами в Telegram</span></a>
                            </div>

                            <div className="sidebar__slider-item twitter">
                            <a href="http://www.instagram.com" target="_blank"><span className="social-logo"><i className="fa fa-twitter"></i>
                                </span><span className="social__text">Следите за нами в Twitter</span></a>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        events: state.events.events,
        newss:state.news.news,
        lang: state.lang.lang
    }
)
export default connect(mapStateToProps, { news })(Sidebar)