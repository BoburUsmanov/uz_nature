import React, { Component } from 'react';
import Sidebar from '../components/common/sidebar';
import { connect } from 'react-redux';
import { find_event } from './../redux/actions/actions';
import Title from '../components/common/title';
import { Link } from 'react-router-dom';
import Useful from '../components/common/useful';
import Slider from 'react-slick';

class singleNews extends Component {
    componentDidMount() {
        this.props.find_event(this.props.lang, this.props.match.params.id);
    }
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className="news__single general__container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="news__box h-100">
                                {this.props.news.map(n =>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <ul className="news__links d-flex">
                                                <li>
                                                    <Link to="/">Главная</Link>
                                                </li>
                                                <li>
                                                    <Link to="/news">Новости</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <Title title={n.name} />
                                        </div>
                                        <div className="col-12">
                                            <div className="news__container">
                                                <img src={"http://localhost" + n.photo} alt="" />
                                                <div className="news__icons">
                                                    <span className="day">
                                                        <i className="fa fa-calendar"></i>26.07.2019
                                                        </span>
                                                    <span className="hour">
                                                        <i className="fa fa-clock-o"></i>10:10
                                                    </span>
                                                    <span className="eye">
                                                        <i className="fa fa-eye"></i>{n.views}
                                                    </span>
                                                </div>
                                                <p className="news__text">
                                                    {n.description}
                                                </p>

                                                <ul className="d-flex header__social ">
                                                    <li className="share__text">
                                                        Поделиться:
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-rss"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <Title title="Другие новости " />
                                        <div className="other__news">
                                            <Slider  {...settings} >
                                                <div className="other__news-item">
                                                    <img src="/img/news/2.png" alt=""/>
                                                    <p>
                                                    «Экологический мониторинг» в Аккурганском районе Ташкентской области
                                                    </p>
                                                    <div className="date d-flex justify-content-between align-items-center">
                                                        <span className="day">13.09.2019</span>
                                                        <span className="eye">
                                                            <i className="fa fa-eye"></i>
                                                            152
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="other__news-item">
                                                    <img src="/img/news/2.png" alt=""/>
                                                    <p>«Экологический мониторинг» в Аккурганском районе Ташкентской области</p>
                                                    <div className="date d-flex justify-content-between align-items-center">
                                                        <span className="day">13.09.2019</span>
                                                        <span className="eye">
                                                            <i className="fa fa-eye"></i>
                                                            152
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="other__news-item">
                                                    <img src="/img/news/2.png" alt=""/>
                                                    <p>
                                                    «Экологический мониторинг» в Аккурганском районе Ташкентской области
                                                    </p>
                                                    <div className="date d-flex justify-content-between align-items-center">
                                                        <span className="day">13.09.2019</span>
                                                        <span className="eye">
                                                            <i className="fa fa-eye"></i>
                                                            152
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="other__news-item">
                                                    <img src="/img/news/2.png" alt=""/>
                                                    <p>
                                                    «Экологический мониторинг» в Аккурганском районе Ташкентской области
                                                    </p>
                                                    <div className="date d-flex justify-content-between align-items-center">
                                                        <span className="day">13.09.2019</span>
                                                        <span className="eye">
                                                            <i className="fa fa-eye"></i>
                                                            152
                                                        </span>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    
                                        
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <Sidebar />
                        </div>

                        <div className="col-12" style={{ padding: '0' }}>
                            <Useful />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang.lang,
    news: state.events.event
})
export default connect(mapStateToProps, { find_event })(singleNews)