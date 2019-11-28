import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import Title from "../components/common/title";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

 class Leadership extends Component {
  constructor(props) {
    super(props);
    this.state = { leaders: [], loading: true };
  }

  componentDidMount() {
    Axios.get(`http://uz.orikzor.com/leaderships`).then(response => {
      this.setState({ leaders: response.data, loading: false });
    });
  }
  render() {
    
    let leader = this.state.leaders.filter(n => {
      return (
        n.lang === this.props.lang
      );
    })

    console.log(leader)
    return (
      <div className="general__container leadership">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 ">
              {this.state.loading && (
                <div className="loader">
                  <img src="/img/loader.gif" alt="" />
                </div>
              )}
              {!this.state.loading && (
                <div className="leadership__box h-100">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <ul className="news__links d-flex">
                        <li>
                          <Link to="/">Главная</Link>
                        </li>
                        <li>
                          <Link to="/news">Руководство</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-12 mb-3">
                      <Title title="Руководство" />
                    </div>
                  </div>

                  <div className="haspadding">
                      {leader.map(l=>(
                          <div className="row leadership__item no-gutters">
                          <div className="col-4">
                             <img src={"http://uz.orikzor.com" + l.photo} className="img-fluid" alt="" />
                          </div>
                          <div className="col-8">
                            <div className="leadership__content h-100">
                              <h2 className="leadership__name">
                                {l.name}
                              </h2>
                              <p className="mb-4">
                              {ReactHtmlParser(l.description)}
                              </p>
                              <p className="d-flex align-items-center mb-3">
                                <img
                                  src="/img/icons/calendar.png"
                                  alt=""
                                  className="mr-3"
                                />{" "}
                                Приемные дни: {l.day_receipt}
                              </p>
                              <p className="d-flex align-items-center mb-3">
                                <img
                                  src="/img/icons/clock.png"
                                  alt=""
                                  className="mr-3"
                                />{" "}
                                Время приема: {l.time_receipt}
                              </p>
                              <p className="d-flex align-items-center mb-3">
                                <img
                                  src="/img/icons/map.png"
                                  alt=""
                                  className="mr-3"
                                />{" "}
                                Приём проводится по адресу: {l.address}
                              </p>
                              <p className="d-flex align-items-center mb-3">
                                <img
                                  src="/img/icons/call.png"
                                  alt=""
                                  className="mr-3"
                                />{" "}
                                Телефон: {l.phone}
                              </p>
                              <p className="d-flex align-items-center mb-5">
                                <img
                                  src="/img/icons/envelope.png"
                                  alt=""
                                  className="mr-3"
                                />
                                Электронная почта: {l.email}
                              </p>
    
                              <div className="d-none justify-content-between">
                                <a href="#" className="leadership__link">
                                  Краткая биография
                                </a>
                                <a href="#" className="leadership__link">
                                  Распределение обязанностей
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
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
  lang: state.lang.lang
});
export default connect(mapStateToProps)(Leadership);