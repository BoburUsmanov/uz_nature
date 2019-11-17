import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ru } from "./../../lang/ru";
import { en } from "./../../lang/en";
import { uz } from "./../../lang/uz";
import { legals } from "./../../redux/actions/actions";
import $ from "jquery";

class Menu extends Component {
  componentDidMount() {
    this.props.legals();

    $(".faq__item").on("click", function() {
      $(this)
        .siblings()
        .removeClass("active")
        .find(".faq__content")
        .slideUp();
      $(this)
        .siblings()
        .find(".fa")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");

      $(this)
        .find(".faq__content")
        .slideDown();
      $(this)
        .find(".fa")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).addClass("active");
    });
  }
  render() {
    var ln;
    if (this.props.lang == "ru") {
      ln = this.props.ru;
    } else if (this.props.lang == "uz") {
      ln = this.props.uz;
    } else {
      ln = this.props.en;
    }

    let legal_menus = this.props.legal.filter(n => {
      return (
        n.name !== null  && n.lang === this.props.lang
      );
    });
    return (
      <ul className="header__menu d-flex justify-content-between">
        <li>
          <NavLink>
            {ln["info"]}
            <i className="fa fa-caret-down" />
          </NavLink>
          <ul className="submenu">
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/events">Календарь мероприятий</Link>
            </li>
            <li>
              <Link to="/faq">Часто за даваемые вопросы</Link>
            </li>
            <li>
              <Link to="/ads">Объявления</Link>
            </li>
            <li>
              <Link to="/tenders">Тендеры</Link>
            </li>
            <li>
              <Link to="/economics">Эконадзор</Link>
            </li>
            <li>
              <Link to="/projects">Проекты</Link>
            </li>
            <li>
              <Link>
                Пресса <i className="fa fa-caret-right" />
              </Link>
              <ul className="sub">
                <li>
                  <Link to="/press">Пресс релизы</Link>
                </li>
                <li>
                  <Link to="/press">Порядок аккредитации</Link>
                </li>
                <li>
                  <Link to="/interviews">Интервью и статьи</Link>
                </li>
                <li>
                  <Link to="/archive">Архив</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news">
                Карьера в комитете <i className="fa fa-caret-right" />
              </Link>

              <ul className="sub">
                <li>
                  <Link to="">
                    Вакансии <i className="fa fa-caret-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/vacancy">ЦА</Link>
                    </li>
                    <li>
                      <Link to="/jobs">Территориальные</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/requirements">Требования</Link>
                </li>
                <li>
                  <Link to="/internship">Стажировка</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news">
                Услуги <i className="fa fa-caret-right" />
              </Link>

              <ul className="sub">
                <li>
                  <Link to="/government">Государственные услуги</Link>
                </li>
                <li>
                  <Link to="/forms">Формы документов</Link>
                </li>
                <li>
                  <Link to="/calculator">Экологический калькулятор</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news">Открытые данные</Link>
            </li>
            <li>
              <Link to="/news">
                Медиатека <i className="fa fa-caret-right" />
              </Link>
              <ul className="sub">
                <li>
                  <Link to="/photogallery">Фото</Link>
                </li>
                <li>
                  <Link to="/videogallery">Видео</Link>
                </li>
                <li>
                  <Link to="">Презентации</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <NavLink>
            {ln["about"]}
            <i className="fa fa-caret-down" />
          </NavLink>
          <ul className="submenu">
            <li>
              <Link to="/center">Центральный Аппарат</Link>
            </li>
            <li>
              <Link to="/territorial"> Территориальные органы</Link>
            </li>
            <li>
              <Link to="/leadership"> Руководство</Link>
            </li>
            {legal_menus.map(l => (
              <li>
                <Link to={'/legalactivity/'+l.one_id}>{l.name}</Link>
              </li>
            ))}
            {/* <li>
              <Link to="/history"> История комитета</Link>
            </li>
            <li>
              <Link to="/leadership"> Руководство</Link>
            </li>
            <li>
              <Link to="/decree"> Общественный совет</Link>
            </li>
            <li>
              <Link to="/cooperation"> Международные сотрудничества</Link>
            </li>
            <li>
              <Link to="/egovernment"> Электронное правительство</Link>
            </li>
            <li>
              <Link to="/anticorruption"> Противодействия коррупции</Link>
            </li> */}
          </ul>
        </li>

        <li>
          <NavLink>
            {ln["activity"]}
            <i className="fa fa-caret-down" />
          </NavLink>
          <ul className="submenu">
            <li>
              <Link to="/activity/1">
                {" "}
                {ln["Atmospheric air and ozone layer"]}
              </Link>
            </li>
            <li>
              <Link to="/activity/2">{ln["Water resources"]}</Link>
            </li>
            <li>
              <Link to="/activity/3">{ln["Land resources and subsoil"]}</Link>
            </li>

            <li>
              <Link to="/activity/4">{ln["Waste management"]}</Link>
            </li>

            <li>
              <Link to="/activity/5">{ln["Biodiversity"]} </Link>
            </li>

            <li>
              <Link to="/activity/6">{ln["OPT"]} </Link>
            </li>

            <li>
              <Link to="/activity/7">{ln["Environmental monitoring"]} </Link>
            </li>

            <li>
              <Link to="/activity/8"> {ln["State eco supervision"]} </Link>
            </li>

            <li>
              <Link to="/activity/9"> {ln["State expertise"]} </Link>
            </li>

            <li>
              <Link to="/activity/10">
                {" "}
                {ln["Environmental certification"]}{" "}
              </Link>
            </li>
            <li>
              <Link to="/activity/11"> {ln["Eco energy"]}</Link>
            </li>

            <li>
              <Link to="/activity/12">{ln["Education"]}</Link>
            </li>

            <li>
              <Link to="/activity/13">{ln["Scientific activity"]}</Link>
            </li>

            <li>
              <Link to="/activity/14">{ln["Fund"]}</Link>
            </li>

            <li>
              <Link to="/activity/15">{ln["International"]}</Link>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/forms">
            {ln["documents"]}
            {/* <i className="fa fa-caret-down" /> */}
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  legal: state.legals.legals,
  ru: ru,
  en: en,
  uz: uz
});

export default connect(mapStateToProps, { legals })(Menu);
