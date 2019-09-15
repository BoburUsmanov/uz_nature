import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ru } from "./../../lang/ru";
import { en } from "./../../lang/en";
import { uz } from "./../../lang/uz";

class Menu extends Component {
  render() {
    var ln;
    if (this.props.lang == "ru") {
      ln = this.props.ru;
    } else if (this.props.lang == "uz") {
      ln = this.props.uz;
    } else {
      ln = this.props.en;
    }

    return (
      <ul className="header__menu d-flex justify-content-between">
        <li>
          <NavLink to="/news">
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
              <Link to="/news">Тендеры</Link>
            </li>
            <li>
              <Link to="/news">Эконадзор</Link>
            </li>
            <li>
              <Link to="/news">Проекты</Link>
            </li>
            <li>
              <Link to="/news">
                Пресса <i className="fa fa-caret-right" />
              </Link>
              <ul className="sub">
                <li>
                  <Link to="">Пресс релизы</Link>
                </li>
                <li>
                  <Link to="">Порядок аккредитации</Link>
                </li>
                <li>
                  <Link to="">Интервью и статьи</Link>
                </li>
                <li>
                  <Link to="">Архив</Link>
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
                      <Link to="">ЦА</Link>
                    </li>
                    <li>
                      <Link to="">Территориальные</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="">Требования</Link>
                </li>
                <li>
                  <Link to="">Стажировка</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news">
                Услуги <i className="fa fa-caret-right" />
              </Link>

              <ul className="sub">
                <li>
                  <Link to="">Государственные услуги</Link>
                </li>
                <li>
                  <Link to="">Формы документов</Link>
                </li>
                <li>
                  <Link to="">Экологический калькулятор</Link>
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
                  <Link to="">Фото</Link>
                </li>
                <li>
                  <Link to="">Видео</Link>
                </li>
                <li>
                  <Link to="">Презентации</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="">
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
              <Link to="/legalactivity"> Правовые основы деятельности</Link>
            </li>
            <li>
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
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/activity">
            {ln["activity"]}
            <i className="fa fa-caret-down" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/documents">
            {ln["documents"]}
            <i className="fa fa-caret-down" />
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  ru: ru,
  en: en,
  uz: uz
});

export default connect(mapStateToProps)(Menu);
