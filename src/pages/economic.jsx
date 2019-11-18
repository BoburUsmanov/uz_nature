import React, {Component} from "react";
import Title from "../components/common/title";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { economics } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class Economic extends Component {
    componentDidMount() {
        this.props.economics();
    }

    render() {
        let t = this.props.economic.filter(n => {
            return n.lang === this.props.lang
        });
        return (
            <div className="economic general__container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="economic__box h-100">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">эконадзор</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <Title title="эконадзор"/>
                                    </div>

                                    <div className="col-12">
                                        <div className="economic__content">
                                            <div className="row">
                                                {t.map(a => (
                                                    <div className="col-6">
                                                        <div
                                                            className="economic__item"
                                                            style={{backgroundImage: "http://uz.orikzor.com/" + a.photo}}
                                                        >
                                                            <div className="economic__item-text">
                                                                <p className="text">{a.name}</p>
                                                                <span className="day">{a.c_d}.{a.c_m}.{a.c_y}</span>
                                                                <span className="eye">
                                                                    <i className="fa fa-eye mr-1"></i>154
                                                                  </span>
                                                                <Link to={'/economics/' + a.one_id} className="more">Подробнее <i className="fa fa-angle-right"></i></Link>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="col-6">
                                                    <div
                                                        className="economic__item"
                                                        style={{backgroundImage: "url(/img/eco/2.png)"}}
                                                    >
                                                        <div className="economic__item-text">
                                                            <p className="text">
                                                                Проведены профилактические мероприятия в
                                                                Аккурганском районе Ташкентской области
                                                            </p>
                                                            <span className="day">08.04.2019</span>
                                                            <span className="eye">
                                <i className="fa fa-eye mr-1"></i>154
                              </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div
                                                        className="economic__item"
                                                        style={{backgroundImage: "url(/img/eco/3.png)"}}
                                                    >
                                                        <div className="economic__item-text">
                                                            <p className="text">
                                                                Незаконная вырубка деревьев
                                                            </p>
                                                            <span className="day">08.04.2019</span>
                                                            <span className="eye">
                                <i className="fa fa-eye mr-1"></i>154
                              </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div
                                                        className="economic__item"
                                                        style={{backgroundImage: "url(/img/eco/4.png)"}}
                                                    >
                                                        <div className="economic__item-text">
                                                            <p className="text">
                                                                «Экологический мониторинг» в Аккурганском районе
                                                                Ташкентской области
                                                            </p>
                                                            <span className="day">08.04.2019</span>
                                                            <span className="eye">
                                <i className="fa fa-eye mr-1"></i>154
                              </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div
                                                        className="economic__item"
                                                        style={{backgroundImage: "url(/img/eco/5.png)"}}
                                                    >
                                                        <div className="economic__item-text">
                                                            <p className="text">
                                                                Экологический контроль в Ташкентской области
                                                            </p>
                                                            <span className="day">08.04.2019</span>
                                                            <span className="eye">
                                <i className="fa fa-eye mr-1"></i>154
                              </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div
                                                        className="economic__item"
                                                        style={{backgroundImage: "url(/img/eco/6.png)"}}
                                                    >
                                                        <div className="economic__item-text">
                                                            <p className="text">
                                                                Экологический рейд в Ташкентской области
                                                            </p>
                                                            <span className="day">08.04.2019</span>
                                                            <span className="eye">
                                <i className="fa fa-eye mr-1"></i>154
                              </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <ul className="d-flex justify-content-center general__pagination align-items-center">
                                                        <li className="prev">
                                                            <span className="fa fa-angle-left"></span>
                                                        </li>
                                                        <li className="active">
                                                            <Link>1</Link>
                                                        </li>

                                                        <li>
                                                            <Link>2</Link>
                                                        </li>

                                                        <li>
                                                            <Link>3</Link>
                                                        </li>
                                                        <li>
                                                            <Link>4</Link>
                                                        </li>
                                                        <li>
                                                            <Link>5</Link>
                                                        </li>

                                                        <li className="next">
                                                            <span className="fa fa-angle-right"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.lang.lang,
    economic: state.economics.economics
});

export default connect(mapStateToProps, { economics })(Economic);
