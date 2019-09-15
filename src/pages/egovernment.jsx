import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

export default class Egovernment extends Component {
  render() {
    return (
      <div className="general__container egovernment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="egovernment__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Электронное правительство</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title="Электронное правительство" />
                  </div>
                </div>

                <div className="haspadding">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <a href="#" className="legalactivity__link">
                        ЗАКОН РЕСПУБЛИКИ УЗБЕКИСТАН ОБ ЭЛЕКТРОННОМ ПРАВИТЕЛЬСТВЕ
                      </a>
                    </div>
                    <div className="col-12 mb-5">
                      <a href="#" className="legalactivity__link">
                        ПОСТАНОВЛЕНИЕ КАБИНЕТА МИНИСТРОВ РЕСПУБЛИКИ УЗБЕКИСТАН О
                        ДАЛЬНЕЙШИХ МЕРАХ ПО РЕАЛИЗАЦИИ ЗАКОНА РЕСПУБЛИКИ
                        УЗБЕКИСТАН «ОБ ЭЛЕКТРОННОМ ПРАВИТЕЛЬСТВЕ»
                      </a>
                    </div>
                    <div className="col-12">
                      <p>
                        В соответствии с законами Республики Узбекистан «Об
                        электронном провительстве» и «О внесении изменений и
                        дополнений в некоторые законадательные акты Республики
                        Узбекистан» Кабинет Министров постановляет: <br />
                        <br />1. Утвердить: Положение о Правительственном
                        портале Республики Узбекистан в сети Интернет согласно
                        приложению №2; <br />
                        <br /> организационную структуру Группы информационного
                        обеспечения и развития Правительственного портала
                        Республики Узбекистан в сети Интернет Единого
                        интегратора по созданию и поддержке государственных
                        информационных систем Министерства по развитию
                        информационных технологий и коммуникаций Республики
                        Узбекистан согласно приложению №3. <br />
                        <br /> 2. Министерству по развитию информационных
                        технологий и коммуникаций Республики Узбекистан в
                        месячный срок обеспечить Группу информационного
                        обеспечения и развития Правительственного портала
                        Республики Узбекистан в сети Интернет Центра развития и
                        внедрения компьютерных и информационных технологий
                        «Узинфоком» необходимой материально-технической базой<div className="br" />
                        <div className="br" /> 3. Внести изменения и дополнения
                        в некоторые решения Правительства Республики Узбекистан
                        согласно приложению №4. <br />
                        <br /> 4. Признать утратившими силу некоторые решения
                        Правительства Республики Узбекистан согласно приложению
                        №5. <br />
                        <br /> 5. Министерствам и ведомствам в месячный срок
                        привести принятые ими нормативно-правовые акты в
                        соответствие с настоящим постановлением. <br />
                        <br /> 6. Контроль за исполнением настоящего
                        постановления возложить на первого заместителя
                        Премьер-министра Республики Узбекистан Р.С. Азимова.
                        <br />
                        <br />
                        <div className="text-right legalactivity__title">
                          Президент Республики Узбекистан Ш. МИРЗИЁЕВ
                        </div>
                        <div className="text-center">
                          г. Ташкент,<br />
                          21 апреля 2017 г. <br />
                          № УП-5024
                        </div>
                        <ul className="d-flex header__social align-items-center share justify-content-end">
                          <li className="share__text">Поделиться:</li>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-rss" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-youtube-play" />
                            </a>
                          </li>
                        </ul>
                      </p>
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
