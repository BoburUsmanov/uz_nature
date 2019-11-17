import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Economic extends Component {
  render() {
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
                    <Title title="эконадзор" />
                  </div>

                  <div className="col-12">
                    <div className="economic__content">
                      <div className="row">
                        <div className="col-6">
                          <div
                            className="economic__item"
                            style={{ backgroundImage: "url(/img/eco/1.png)" }}
                          >
                            <div className="economic__item-text">
                              <p className="text">
                                Незаконный ввоз двух соколов из-за границы в
                                Республику Узбекистан
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
                            style={{ backgroundImage: "url(/img/eco/2.png)" }}
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
                            style={{ backgroundImage: "url(/img/eco/3.png)" }}
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
                            style={{ backgroundImage: "url(/img/eco/4.png)" }}
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
                            style={{ backgroundImage: "url(/img/eco/5.png)" }}
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
                            style={{ backgroundImage: "url(/img/eco/6.png)" }}
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
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
  lang: state.lang.lang
});

export default connect(mapStateToProps)(Economic);
