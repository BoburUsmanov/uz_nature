import React, { Component } from 'react';
import Title from '../components/common/title';
import Sidebar from '../components/common/sidebar';
import { Link } from 'react-router-dom';
import { comitet } from '../redux/actions/actions';
import { connect } from 'react-redux';

class Territorial extends Component {

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
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <Title title="Территориальные органы" />
                                    </div>
                                    <div className="col-12">
                                        <div className="territorial__content">
                                            <p className="territorial__text">Выберите территориальное управление</p>
                                            <div className="row no-gutters">
                                                <div className="territorial__item active">Государственный комитет Республики Узбекистан по экологии и охране окружающей среды</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Республика Каракалпакстан
                                                        </Link>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Навоийская область
                                                        </Link>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Ташкентская область
                                                        </Link>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Андижанская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Наманганская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Город Ташкент
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Бухарская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Самаркандская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Ферганская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Джизакская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Сурхандарьинская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Хорезмская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Кашкадарьинская область
                                                        </Link>
                                                </div>

                                                <div className="col-4">
                                                    <Link to="/tsingle" className="territorial__item">
                                                        Сырдарьинская область
                                                        </Link>
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
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons.persons,
    lang: state.lang.lang
})

export default connect(mapStateToProps, { comitet })(Territorial);