import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

export default class Accreditation extends Component {
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
                        <Link to="#">Порядок аккредитации</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title="Порядок аккредитации" />
                  </div>
                </div>

                <div className="haspadding">
                  <div className="row">
                     
                    <div className="col-12">
                      <p>
                      Согласно постановлению Кабинета Министров Республики Узбекистан от 23 ноября 2006 года №243 «О совершенствовании порядка аккредитации представителей средств массовой информации Республики Узбекистан при органах государственной власти», Комитетом осуществляется организационная работа по аккредитации корреспондентов. Желающим провести аккредитацию в системе Госкомэкологии Республики Узбекистан, необходимо представить заявку, в порядке установленном в данном Постановлении порядке, где должны быть указаны:
<br />
- название и вид средства массовой информации;
<br />
- специализация;
<br />
- территория распространения;
<br />
- адрес электронной почты;
<br />
- номера телефонов и факсов редакции;
<br />
-фамилия, имя и отчество представленного на аккредитацию корреспондента;
<br />
- аппаратура, которую необходимо иметь при себе данному корреспонденту для выполнения профессиональных обязанностей, а также справка, содержащая подробные сведения (служебное положение, паспортные данные, копии диплома корреспондента, адрес электронной почты, номер телефона и факса) и четыре фотографии установленной формы.
<br />
Направленная заявка рассматривается в установленном порядке.
<br />
«ПОЛОЖЕНИЕ О СОВЕРШЕНСТВОВАНИИ ПОРЯДКА АККРЕДИТАЦИИ ПРЕДСТАВИТЕЛЕЙ СРЕДСТВ МАССОВОЙ ИНФОРМАЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН ПРИ ОРГАНАХ ГОСУДАРСТВЕННОЙ ВЛАСТИ»
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
