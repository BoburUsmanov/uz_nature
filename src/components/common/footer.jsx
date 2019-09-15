import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo';
import {connect} from 'react-redux';
import {ru} from './../../lang/ru';
import {uz} from './../../lang/uz';
import {en} from './../../lang/en';

 class Footer extends Component {
    render() {
        var ln;
        if (this.props.lang == 'ru') {
            ln = this.props.ru;
        }
        else if (this.props.lang == 'uz') {
            ln = this.props.uz;
        } else {
            ln = this.props.en;
        }
        return (
            <footer className="footer">
                <div className="footer__top">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-2 line">
                                <h2 className="footer__title">
                                    {ln['useful link']}
                    </h2>
                                <ul className="footer__menu">
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['info']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['about']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['activity']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['documents']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['feedback']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['For legal entities']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['For individuals']}</Link>
                                    </li>
                                    <li>
                                        <span className="fa fa-caret-right"></span><Link to="/">{ln['Hot line']}</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-8 line two">
                                <div className="row">
                                    <div className="col-4">
                                        <h2 className="footer__title">
                                           {ln['contacts']}
                    </h2>
                                        <div className="footer__contact">
                                            Узбекистан, ТАШКЕНТ,<br /> Мирзо-Улугбекский район, ул<br/>Сайрам, 5-й проезд, 15-дом
                                            
                    </div>
                                        <div className="footer__contact mobile">
                                            +998 71 268 - 33 - 29 <br />
                                            +998 71 268 - 38 - 88
                    </div>
                                        <div className="footer__contact">
                                            Почтовый индекс:100077
                    </div>
                                        <div className="footer__contact">
                                            info@uznature.uz
                    </div>
                                    </div>
                                    <div className="col-4">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.143764005496!2d69.2861949156687!3d41.30573600901545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef52b2f0c1929%3A0x77de8528e634475c!2sGosudarstvennyy+Komitet+Respubliki+Uzbekistan+Po+Okhrane+Prirody!5e0!3m2!1suz!2s!4v1564352292242!5m2!1suz!2s" allowFullScreen></iframe>
                                    </div>
                                    <div className="col-4 ">
                                        <h2 className="footer__title">
                                            {ln['PORTAL ON HANDLING OF PHYSICAL PERSONS']}
                        </h2>
                                        <ul className="footer__links">
                                            <li>
                                                <Link to="/">Юридическое лицо</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Физическое лицо</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Задать вопрос</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="d-flex  align-items-center h-100">
                                    <Logo className="footer__logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom general__container">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <div className="footer__bottom-left">
                                    © www.eco.gov.uz, 2019. Все права защищены.
                    </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-around">
                                    <Link to="" className="footer__bottom-link ">Карта сайта</Link>
                                    <Link to="" className="footer__bottom-link ">Государственные символы</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <ul className="d-flex header__social">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = state =>({
    lang:state.lang.lang,
    ru:ru,
    uz:uz,
    en:en
});
export default connect(mapStateToProps)(Footer)