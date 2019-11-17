import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Press extends Component {
  render() {
    return (
      <div className="press general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="press__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Пресс-релизы</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Пресс-релизы" />
                  </div>

                  <div className="col-12">
                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
                        </div>

                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
                        </div>

                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
                        </div>

                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
                        </div>

                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
                        </div>

                        <div className="press__item">
                                <h2 className="press__item-title">Пресс-релиз заседания Управляющего комитета и посещение пилотных проектов </h2>
                                <p className="press__item-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <div className="d-flex align-items-center justify-content-between mt-3"><div className="day">Опубликовано: 20 июня 2019 г. - 13:22 <span className="eye ml-5"><i className="fa fa-eye mr-2"></i>154</span></div><a href="#" className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></a></div>
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

export default connect(mapStateToProps)(Press);
