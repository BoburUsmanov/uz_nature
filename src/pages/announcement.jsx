import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ads } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";



class Announcement extends Component {

    componentDidMount() {
        this.props.ads()
    }

    render() {
        let adss = this.props.adds.filter(n=>{
            return n.lang === this.props.lang
          });
             return (
            <div className="general__container news">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">

                            <div className="ads h-100">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">объявления</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <Title title="объявления" />
                                    </div>
                                </div>

                                <div className="row ads__content">
                                    {adss.map(a => (
                                            <div className="col-6">
                                                <div className="ads__item">
                                                    <div className="date d-flex">
                                                        <span className="day"><i className="fa fa-calendar"></i>13.08.2019</span>
                                                        <div className="eye">
                                                            <i className="fa fa-eye"></i>152
                                                </div>
                                                    </div>
                                                    <div className="content">
                                                        <p>
                                                            {a.name}

                                                        </p>

                                                        <Link to={'/ads/' + a.one_id} className="link">Подробнее <i className="fa fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                </div>

                                <div className="row">
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

                        <div className="col-12" style={{ padding: '0' }}>
                            <Useful />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    lang: state.lang.lang,
    adds: state.ads.ads
})
export default connect(mapStateToProps, { ads })(Announcement);