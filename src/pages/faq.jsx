import React, { Component } from 'react'
import Sidebar from '../components/common/sidebar';
import { Link } from 'react-router-dom';
import Title from '../components/common/title';
import Useful from '../components/common/useful';
import $ from 'jquery';

export default class FAQ extends Component {
    componentDidMount(){
        $('.faq__item').on('click',function(){

            $(this).siblings().removeClass('active').find('.faq__content').slideUp();
            $(this).siblings().find('.fa').removeClass('fa-minus').addClass('fa-plus');
    
            $(this).find('.faq__content').slideDown();
            $(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
             $(this).addClass('active')
        });
    }
    render() {
        return (
            <div className="general__container news">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="faq h-100">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">Часто задаваемые вопросы</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                    <Title title="Часто задаваемые вопросы" />
                                </div>
                                </div>
                               

                                <div className="col-12">
                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Кто выдает разрешение на вырубку деревья?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                При выявлений фактов незаконноой рубки кудо надо обратиться?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Кто выдает разрешение на ввоз и вывоз объетов растительного мира?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Насколько метров деревья можно разрезать?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Как можно получить разрешения на заготовку (сбор), изъятие из природной среды видов растений?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Какими документами регулируется заготовка (сбор), изъятие из природной среды, экспорт и импорт видов растений?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                Кто выдает разрешение на ввоз и вывоз объетов растительного мира?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="faq__item">
                                        <div className="row no-gutters align-items-center faq__head">
                                            <div className="col-10">
                                                <div className="faq__text">
                                                До сколький килограмм можно ловить рыбу без разрешения?
                                                </div>
                                            </div>
                                            <div className="col-2 text-right">
                                                <div className="faq__icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="faq__content">
                                        В соответствии с частью 2 статьи 37 Закона Республики Узбекистан
                                         «Об охране и использовании растительного мира» а также пунктом 13
                                          Положения «О порядке использования объектов растительного мира
                                           и прохождения разрешительных процедур в сфере пользования объектами растительного мира», утвержденным постановлением Кабинета Министров Республики Узбекистан от 20.10.2014г. №290, рубка древесных и кустарниковых насаждений, не входящих в лесной фонд, допускается только в порядке санитарных рубок, связанных со строительством зданий, сооружений и коммуникаций, по решению органов государственной власти на местах, согласованному с территориальными органами по экологии и охране окружающей среды.
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <Link to="/ask" className="faq__send">
                                        Задать вопрос
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <Sidebar />
                        </div>

                        <div className="col-12" style={{padding:'0'}}>
                            <Useful />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
