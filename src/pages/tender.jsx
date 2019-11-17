import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Tender extends Component {
  render() {
    return (
      <div className="tender general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="tender__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">тендеры</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="тендеры" />
                  </div>

                  <div className="col-12">
                    <div className="row no-gutters tender__item">
                      <div
                        className="col-4 tender__item-img"
                        style={{ backgroundImage: "url(/img/tender/1.png)" }}
                      >
                        <span className="tender__item-day">
                          <span className="day">26</span>
                          <span className="month">июня </span>
                          <span className="year">2019 г.</span>
                        </span>
                      </div>
                      <div className="col-8 tender__item-content">
                        <p className="tender__item-text">
                          Государственный комитет Республики Узбекистан по
                          экологии и охране окружающей среды объявляет конкурс
                          по отбору поставщика на оказание услуг по обслуживанию
                          здания Заказчика, находящегося по адресу: Ташкент,
                          Мирзо-Улугбекский район, ул. Сайрам, 5-й проезд,
                          15-дом, а именно ....
                        </p>
                        <span className="eye">
                          <i className="fa fa-eye mr-1"></i> 154
                        </span>
                        <a href="#" className="more">
                          Подробнее <i className="fa fa-angle-right ml-1"></i>
                        </a>
                      </div>
                    </div>

                    <div className="row no-gutters tender__item">
                      <div
                        className="col-4 tender__item-img"
                        style={{ backgroundImage: "url(/img/tender/2.png)" }}
                      >
                        <span className="tender__item-day">
                          <span className="day">26</span>
                          <span className="month">июня </span>
                          <span className="year">2019 г.</span>
                        </span>
                      </div>
                      <div className="col-8 tender__item-content">
                        <p className="tender__item-text">
                          Государственный комитет Республики Узбекистан по
                          экологии и охране окружающей среды объявляет конкурс
                          по отбору поставщика на оказание услуг по обслуживанию
                          здания Заказчика, находящегося по адресу: Ташкент,
                          Мирзо-Улугбекский район, ул. Сайрам, 5-й проезд,
                          15-дом, а именно ....
                        </p>
                        <span className="eye">
                          <i className="fa fa-eye mr-1"></i> 154
                        </span>
                        <a href="#" className="more">
                          Подробнее <i className="fa fa-angle-right ml-1"></i>
                        </a>
                      </div>
                    </div>

                    <div className="row no-gutters tender__item">
                      <div
                        className="col-4 tender__item-img"
                        style={{ backgroundImage: "url(/img/tender/3.png)" }}
                      >
                        <span className="tender__item-day">
                          <span className="day">26</span>
                          <span className="month">июня </span>
                          <span className="year">2019 г.</span>
                        </span>
                      </div>
                      <div className="col-8 tender__item-content">
                        <p className="tender__item-text">
                          Государственный комитет Республики Узбекистан по
                          экологии и охране окружающей среды объявляет конкурс
                          по отбору поставщика на оказание услуг по обслуживанию
                          здания Заказчика, находящегося по адресу: Ташкент,
                          Мирзо-Улугбекский район, ул. Сайрам, 5-й проезд,
                          15-дом, а именно ....
                        </p>
                        <span className="eye">
                          <i className="fa fa-eye mr-1"></i> 154
                        </span>
                        <a href="#" className="more">
                          Подробнее <i className="fa fa-angle-right ml-1"></i>
                        </a>
                      </div>
                    </div>

                    <div className="row no-gutters tender__item">
                      <div
                        className="col-4 tender__item-img"
                        style={{ backgroundImage: "url(/img/tender/4.png)" }}
                      >
                        <span className="tender__item-day">
                          <span className="day">26</span>
                          <span className="month">июня </span>
                          <span className="year">2019 г.</span>
                        </span>
                      </div>
                      <div className="col-8 tender__item-content">
                        <p className="tender__item-text">
                          Государственный комитет Республики Узбекистан по
                          экологии и охране окружающей среды объявляет конкурс
                          по отбору поставщика на оказание услуг по обслуживанию
                          здания Заказчика, находящегося по адресу: Ташкент,
                          Мирзо-Улугбекский район, ул. Сайрам, 5-й проезд,
                          15-дом, а именно ....
                        </p>
                        <span className="eye">
                          <i className="fa fa-eye mr-1"></i> 154
                        </span>
                        <a href="#" className="more">
                          Подробнее <i className="fa fa-angle-right ml-1"></i>
                        </a>
                      </div>
                    </div>

                    <div className="row">
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

export default connect(mapStateToProps)(Tender);
