import React, { Component } from 'react';
import Title from '../components/common/title';
import Sidebar from '../components/common/sidebar';
import { Link } from 'react-router-dom';
import { comitet } from '../redux/actions/actions';
import { connect } from 'react-redux';

class TerritorialSingle extends Component {

    componentDidMount() {
        this.props.comitet()
    }
    render() {
        return (
            <div className="territorial general__container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="territorial__box h-100">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">Территориальные органы</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">Государственный комитет Республики Узбекистан </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <Title title="Территориальные органы" />
                                    </div>
                                    <div className="col-12">
                                        <div className="territorial__content">
                                            <p className="territorial__text">Государственный комитет Республики Узбекистан по экологиии охране окружающей среды</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="haspadding">
                                    <div className="row mb-5 align-items-center">
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/map.png" alt="" /><div className="bold ml-3">Адрес:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    100047, г. Ташкент, Яшнабадский район, улица Той-Тепа, дом 2А
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/bus.png" alt="" /><div className="bold ml-3">Автобусы:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    2,16, 21, 72, 80, 93, 96, 137
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-5 align-items-center">
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/map.png" alt="" /><div className="bold ml-3">Ориентир:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    Посольство Китая
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/clock.png" alt="" /><div className="bold ml-3">Режим работы:
</div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    c 08:00 до 18:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-5 align-items-center">
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/call.png" alt="" /><div className="bold ml-3">Приемная:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    +998 71 207 - 07 - 70 (внутр: 1001#)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/dinner.png" alt="" /><div className="bold ml-3">Обед:
</div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    c 08:00 до 18:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-5 align-items-center">
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/call.png" alt="" /><div className="bold ml-3">Канцелярия:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    +998 71 207 - 07 - 70 (внутр: 5015#)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/clock.png" alt="" /><div className="bold ml-3">Выходные:
</div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    Суббота, Воскресенье
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-5 align-items-center">
                                        <div className="col-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center"><img src="/img/icons/fax.png" alt="" /><div className="bold ml-3">Факс:</div></div>
                                                </div>
                                                <div className="col-8">
                                                    +998 71 236 - 33 - 31
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="territorial__map mb-5">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9120578506577!2d69.28360521566883!3d41.31077670870347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8cd237719d%3A0xaabc3f9c44b7ad09!2sGermes%20Tour!5e0!3m2!1suz!2s!4v1568532474078!5m2!1suz!2s" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
                                    </div>

                                    <div className="territorial__guide">
                                        <h2>Руководство</h2>
                                        <div class="center__item"><div class="row no-gutters"><div class="col-5 center__item-left"><img src="http://uz.orikzor.com//about/committee/2942002+.png" alt="" /></div><div class="col-7 center__item-right"><h2 class="center__item-title">Birlashtirilgan axborot va tahliliy boshqaruv</h2><p class="center__item-text">Boshliq - Muxammadiev O'ktam Zaynitdinovich</p><p class="center__item-text">Телефон: +998 712 07 07 70 (1014#)</p><p class="center__item-text">Электронная почта: m.muxammadiev@uznature.uz </p></div></div></div>
                                    </div>

                                    <div class="territorial__others mt-5"><p class="territorial__text">Выберите территориальное управление</p><div class="row no-gutters"><div class="territorial__item active">Государственный комитет Республики Узбекистан по экологии и охране окружающей среды</div></div><div class="row"><div class="col-4"><a class="territorial__item" href="/tsingle">Республика Каракалпакстан</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Навоийская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Ташкентская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Андижанская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Наманганская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Город Ташкент</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Бухарская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Самаркандская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Ферганская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Джизакская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Сурхандарьинская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Хорезмская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Кашкадарьинская область</a></div><div class="col-4"><a class="territorial__item" href="/tsingle">Сырдарьинская область</a></div></div></div>
                                </div>
                            </div>


                        </div>
                        <div className="col-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons.persons,
    lang: state.lang.lang
})

export default connect(mapStateToProps, { comitet })(TerritorialSingle);