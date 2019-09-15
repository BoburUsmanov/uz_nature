import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import Title from "../components/common/title";
import { Link } from "react-router-dom";

export default class Leadership extends Component {
  render() {
    return (
      <div className="general__container leadership">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 ">
              <div className="leadership__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Руководство</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-3">
                    <Title title="Руководство" />
                  </div>
                </div>

                <div className="haspadding">
                  <div className="row leadership__item no-gutters">
                    <div className="col-4">
                      <img
                        src="/img/leaders/1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <div className="leadership__content h-100">
                        <h2 className="leadership__name">
                          Кучкаров Бахром Тулкинович
                        </h2>
                        <p className="mb-4">
                          Председатель Государственного комитета Республики
                          Узбекистан по экологии и охране окружающей среды
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/calendar.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приемные дни: понедельник - пятница
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/clock.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Время приема: с 8:00 до 11:00
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/map.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приём проводится по адресу: г. Ташкент, ул.Туйтепа, 2
                          А.
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/call.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Телефон: (71) 207 07 70 (внут. 1001#)
                        </p>
                        <p className="d-flex align-items-center mb-5">
                          <img
                            src="/img/icons/envelope.png"
                            alt=""
                            className="mr-3"
                          />Электронная почта: info@uznature.uz
                        </p>

                        <div className="d-flex justify-content-between">
                          <a href="#" className="leadership__link">
                            Краткая биография
                          </a>
                          <a href="#" className="leadership__link">
                            Распределение обязанностей
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row leadership__item no-gutters">
                    <div className="col-4">
                      <img
                        src="/img/leaders/1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <div className="leadership__content h-100">
                        <h2 className="leadership__name">
                          Кучкаров Бахром Тулкинович
                        </h2>
                        <p className="mb-4">
                          Председатель Государственного комитета Республики
                          Узбекистан по экологии и охране окружающей среды
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/calendar.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приемные дни: понедельник - пятница
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/clock.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Время приема: с 8:00 до 11:00
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/map.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приём проводится по адресу: г. Ташкент, ул.Туйтепа, 2
                          А.
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/call.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Телефон: (71) 207 07 70 (внут. 1001#)
                        </p>
                        <p className="d-flex align-items-center mb-5">
                          <img
                            src="/img/icons/envelope.png"
                            alt=""
                            className="mr-3"
                          />Электронная почта: info@uznature.uz
                        </p>

                        <div className="d-flex justify-content-between">
                          <a href="#" className="leadership__link">
                            Краткая биография
                          </a>
                          <a href="#" className="leadership__link">
                            Распределение обязанностей
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row leadership__item no-gutters">
                    <div className="col-4">
                      <img
                        src="/img/leaders/1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <div className="leadership__content h-100">
                        <h2 className="leadership__name">
                          Кучкаров Бахром Тулкинович
                        </h2>
                        <p className="mb-4">
                          Председатель Государственного комитета Республики
                          Узбекистан по экологии и охране окружающей среды
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/calendar.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приемные дни: понедельник - пятница
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/clock.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Время приема: с 8:00 до 11:00
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/map.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приём проводится по адресу: г. Ташкент, ул.Туйтепа, 2
                          А.
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/call.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Телефон: (71) 207 07 70 (внут. 1001#)
                        </p>
                        <p className="d-flex align-items-center mb-5">
                          <img
                            src="/img/icons/envelope.png"
                            alt=""
                            className="mr-3"
                          />Электронная почта: info@uznature.uz
                        </p>

                        <div className="d-flex justify-content-between">
                          <a href="#" className="leadership__link">
                            Краткая биография
                          </a>
                          <a href="#" className="leadership__link">
                            Распределение обязанностей
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row leadership__item no-gutters">
                    <div className="col-4">
                      <img
                        src="/img/leaders/1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <div className="leadership__content h-100">
                        <h2 className="leadership__name">
                          Кучкаров Бахром Тулкинович
                        </h2>
                        <p className="mb-4">
                          Председатель Государственного комитета Республики
                          Узбекистан по экологии и охране окружающей среды
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/calendar.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приемные дни: понедельник - пятница
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/clock.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Время приема: с 8:00 до 11:00
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/map.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Приём проводится по адресу: г. Ташкент, ул.Туйтепа, 2
                          А.
                        </p>
                        <p className="d-flex align-items-center mb-3">
                          <img
                            src="/img/icons/call.png"
                            alt=""
                            className="mr-3"
                          />{" "}
                          Телефон: (71) 207 07 70 (внут. 1001#)
                        </p>
                        <p className="d-flex align-items-center mb-5">
                          <img
                            src="/img/icons/envelope.png"
                            alt=""
                            className="mr-3"
                          />Электронная почта: info@uznature.uz
                        </p>

                        <div className="d-flex justify-content-between">
                          <a href="#" className="leadership__link">
                            Краткая биография
                          </a>
                          <a href="#" className="leadership__link">
                            Распределение обязанностей
                          </a>
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
