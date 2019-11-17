import React, { Component } from 'react';
import Title from '../components/common/title';
import Sidebar from '../components/common/sidebar';
import { Link } from 'react-router-dom';
import { comitet } from '../redux/actions/actions';
import { connect } from 'react-redux';

class Center extends Component {

    componentDidMount() {
        this.props.comitet()
    }
    render() {
        let persons_array = this.props.persons.filter(p => {
            return (
              p.lang === this.props.lang
            );
          });
        return (
            <div className="center general__container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="center__box h-100">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">О комитете</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">Структура комитета</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <Title title="Центральный аппарат" />
                                    </div>
                                    <div className="col-12">
                                        {persons_array.map(person => <div className="center__item">
                                            <div className="row no-gutters">
                                                <div className="col-5 center__item-left">
                                                    <img src={"http://uz.orikzor.com/" + person.photo} alt="" />
                                                </div>
                                                <div className="col-7 center__item-right">
                                                    <h2 className="center__item-title">{person.direction}</h2>
                                                    <p className="center__item-text">{person.name}</p>
                                                    <p className="center__item-text">Телефон: {person.phone}</p>
                                                    <p className="center__item-text">Электронная почта: {person.email} </p>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                    <div className="col-12">
                                        <ul className="d-flex justify-content-center general__pagination align-items-center">
                                            <li className="prev">
                                                <span className="fa fa-angle-left"></span>
                                            </li>
                                            <li className="active">
                                                <Link>
                                                    1
                                                </Link>
                                            </li>

                                            <li>
                                                <Link>
                                                    2
                                                </Link>
                                            </li>

                                            <li>
                                                <Link>
                                                    3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    5
                                                </Link>
                                            </li>

                                            <li className="next">
                                                <span className="fa fa-angle-right"></span>
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
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons.persons,
    lang: state.lang.lang
})

export default connect(mapStateToProps, { comitet })(Center);