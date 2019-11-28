import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

export default class Sitemap extends Component {
  render() {
    return (
      <div className="sitemap general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="sitemap__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/sitemap">Карта сайта</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12">
                    <Title title="Карта сайта" />
                  </div>
                  <div className="sitemap__content">
                    <div className="col-12">
                      <h2 className="sitemap__title">Инфо центр</h2>
                      <ul className="sitemap__menu">
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
                          <Link to="/press">Пресс релизы</Link>
                        </li>
                        <li>
                          <Link to="/accreditation">Порядок аккредитации</Link>
                        </li>
                        <li>
                          <Link to="/interviews">Интервью и статьи</Link>
                        </li>
                        <li>
                          <Link to="/archive">Архив</Link>
                        </li>
                        <li>
                          <Link to="/vacancy">ЦА</Link>
                        </li>
                        <li>
                          <Link to="/jobs">Территориальные</Link>
                        </li>
                        <li>
                          <Link to="/careers/1">Требования</Link>
                        </li>
                        <li>
                          <Link href="/careers/2">Стажировка</Link>
                        </li>
                        <li>
                          <Link to="/government">Государственные услуги</Link>
                        </li>
                        <li>
                          <Link to="/forms">Формы документов</Link>
                        </li>
                        <li>
                          <Link to="/calculator">
                            Экологический калькулятор
                          </Link>
                        </li>
                        <li>
                          <Link to="/open">Открытые данные</Link>
                        </li>
                        <li>
                          <Link to="/photogallery">Фото</Link>
                        </li>
                        <li>
                          <Link to="/videogallery">Видео</Link>
                        </li>
                        <li>
                          <Link to="/">Презентации</Link>
                        </li>
                      </ul>

                      <h2 className="sitemap__title mt-5">О комитете</h2>
                      <ul className="sitemap__menu">
                        <li>
                          <Link to="/center">Центральный Аппарат</Link>
                        </li>
                        <li>
                          <Link to="/territorial"> Территориальные органы</Link>
                        </li>
                        <li>
                          <Link to="/leadership"> Руководство</Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/1">Общие сведения</Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/2">История комитета</Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/3">
                            Международные сотрудничества
                          </Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/4">
                            Электронное правительство
                          </Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/5">Законодательство</Link>
                        </li>
                        <li>
                          <Link to="/legalactivity/6">
                            Противодействия коррупции
                          </Link>
                        </li>
                      </ul>
                      <h2 className="sitemap__title mt-5">
                        Направление деятельности
                      </h2>
                      <ul class="sitemap__menu">
                        <li>
                          <Link to="/activity/1"> Охрана атмосферного воздуха</Link>
                        </li>
                        <li>
                          <Link to="/activity/2">Охрана водных ресурсов</Link>
                        </li>
                        <li>
                          <Link to="/activity/3">
                            Охрана земельных ресурсов и недр
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/4">Обращение с отходами</Link>
                        </li>
                        <li>
                          <Link to="/activity/5">Охрана биоразнообразия </Link>
                        </li>
                        <li>
                          <Link to="/activity/6">
                            Охраняемые природные территории
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/7">
                            Мониторинг загрязнения окружающей среды
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/8">
                            Государственный экологический надзор
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/9">
                            
                            Государственная экологическая экспертиза
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/10">
                            
                            Государственная экологическая сертификация и
                            стандартизация
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/11"> Эко энергия</Link>
                        </li>
                        <li>
                          <Link to="/activity/12">Эко образование</Link>
                        </li>
                        <li>
                          <Link to="/activity/13">
                            Научно-исследовательская деятельность
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/14">
                            Фонд экологии, охраны окружающей среды и обращения с
                            отходами
                          </Link>
                        </li>
                        <li>
                          <Link to="/activity/15">
                            Международное сотрудничество
                          </Link>
                        </li>
                      </ul>
                      <h2 className="sitemap__title mt-5">Документы</h2>
                      <ul className="sitemap__menu">
                          <li>
                              <Link to="/forms">Документы</Link>
                          </li>
                      </ul>
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
