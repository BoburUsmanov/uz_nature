import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Projects extends Component {
  render() {
    return (
      <div className="projects general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="projects__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">проекты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="проекты" />
                  </div>

                  <div className="col-12">
                    <div className="projects__content">
                      <div className="row mb-3">
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <button className="projects__btn active">
                              Все проекты
                            </button>
                            <button className="projects__btn">
                              Действующие проекты
                            </button>
                            <button className="projects__btn">
                              Завершенные проекты
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="projects__item">
                            <div className="row">
                              <div className="col-4">
                                <img
                                  src="/img/projects/1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-8">
                                <h2 className="projects__item-title">
                                  Реализация национального проекта «Экология»
                                </h2>
                                <div className="day d-flex justify-content-between">
                                  <span className="day__start">
                                    Начало проекта: 04 Июня 2018 г.
                                  </span>
                                  <span className="day__end">
                                    Окончание проекта: 25 октября 2022 г.
                                  </span>
                                </div>
                                <p className="projects__item-text">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <div className="text-right mt-2">
                                  {" "}
                                  <a href="#" className="more">
                                    Подробнее{" "}
                                    <i className="fa fa-angle-right ml-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="projects__item">
                            <div className="row">
                              <div className="col-4">
                                <img
                                  src="/img/projects/2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-8">
                                <h2 className="projects__item-title">
                                  Реализация национального проекта «Экология»
                                </h2>
                                <div className="day d-flex justify-content-between">
                                  <span className="day__start">
                                    Начало проекта: 04 Июня 2018 г.
                                  </span>
                                  <span className="day__end">
                                    Окончание проекта: 25 октября 2022 г.
                                  </span>
                                </div>
                                <p className="projects__item-text">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <div className="text-right mt-2">
                                  {" "}
                                  <a href="#" className="more">
                                    Подробнее{" "}
                                    <i className="fa fa-angle-right ml-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="projects__item">
                            <div className="row">
                              <div className="col-4">
                                <img
                                  src="/img/projects/1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-8">
                                <h2 className="projects__item-title">
                                  Реализация национального проекта «Экология»
                                </h2>
                                <div className="day d-flex justify-content-between">
                                  <span className="day__start">
                                    Начало проекта: 04 Июня 2018 г.
                                  </span>
                                  <span className="day__end">
                                    Окончание проекта: 25 октября 2022 г.
                                  </span>
                                </div>
                                <p className="projects__item-text">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <div className="text-right mt-2">
                                  {" "}
                                  <a href="#" className="more">
                                    Подробнее{" "}
                                    <i className="fa fa-angle-right ml-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="projects__item">
                            <div className="row">
                              <div className="col-4">
                                <img
                                  src="/img/projects/2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-8">
                                <h2 className="projects__item-title">
                                  Реализация национального проекта «Экология»
                                </h2>
                                <div className="day d-flex justify-content-between">
                                  <span className="day__start">
                                    Начало проекта: 04 Июня 2018 г.
                                  </span>
                                  <span className="day__end">
                                    Окончание проекта: 25 октября 2022 г.
                                  </span>
                                </div>
                                <p className="projects__item-text">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <div className="text-right mt-2">
                                  {" "}
                                  <a href="#" className="more">
                                    Подробнее{" "}
                                    <i className="fa fa-angle-right ml-1"></i>
                                  </a>
                                </div>
                              </div>
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

export default connect(mapStateToProps)(Projects);
