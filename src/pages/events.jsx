import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";
import FulCalendar from "../components/FulCalendar";

class Events extends Component {
  componentDidMount() {
    this.props.events();
  }
  render() {
    return (
      <div className="event general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="event__box h-100">
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
                  <div className="col-12">
                    <Title title="Календарь мероприятий" />
                  </div>
                  <div className="col-12">
                    {/* <FulCalendar /> */}
                  </div>
                  <div className="col-12">
                    <p className="event__day">
                      17 июня “Всемирный день борьбы с опустыниванием и засухой
                    </p>
                    <div className="event__img">
                      <img src="/img/event.png" alt="" />
                    </div>
                    <p className="event__text">
                      Всемирный день борьбы с опустыниванием и засухой (World
                      Day to Combat Desertification and Drought), отмечаемый во
                      всём мире ежегодно 17 июня, был установлен Генеральной
                      Ассамблеей ООН 30 января 1995 года (резолюция №
                      A/RES/49/115). Дата для праздника была выбрана в связи с
                      годовщиной со дня принятия Конвенции Организации
                      Объединенных Наций по борьбе с опустыниванием 17 июня 1994
                      года. Конвенция предписывала государствам посвящать
                      мероприятия Всемирного дня борьбы с опустыниванием и
                      засухой повышению информированности о необходимости
                      международного сотрудничества в борьбе с опустыниванием и
                      последствиями засухи, а также о ходе осуществления
                      положений Конвенции по борьбе с опустыниванием. Также
                      Генеральная Ассамблея ООН провозгласила период с января
                      2010 года по декабрь 2020 года Десятилетием ООН,
                      посвящённым пустыням и борьбе с опустыниванием. Его цель —
                      содействие проведению мероприятий по охране засушливых
                      земель (резолюция 62/195 от 2007 года). Каждый год
                      Всемирный день борьбы с опустыниванием и засухой посвящен
                      определенной теме. В разные годы ими были следующие слова:
                      «Красота пустынь — проблема опустынивания», «Опустынивание
                      и изменение климата — единая глобальная проблема»,
                      «Сохранение земельных и водных ресурсов = Защита нашего
                      общего будущего», «Улучшение качества жизни через
                      повышение плодородия почвы», «Не дайте засохнуть нашему
                      будущему», «Бесплатной еды не бывает. Инвестируйте в
                      здоровье почв», «Всеобъемлющее сотрудничество в целях
                      предотвращения деградации земель» и другие.
                    </p>
                    <ul className="d-flex header__social ">
                      <li className="share__text">Поделиться:</li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube-play"></i>
                        </a>
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

export default connect(
  mapStateToProps,
  { events }
)(Events);
