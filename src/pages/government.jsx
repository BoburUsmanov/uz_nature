import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { services } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";
class Government extends Component {
  componentDidMount() {
    this.props.services()
}
  render() {
    let t = this.props.service.filter(n=>{
      return n.lang === this.props.lang
  });
    return (
      <div className="government general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="government__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Государственные услуги</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Государственные услуги" />
                  </div>

                  <div className="col-12">
                    <div className="government__content">
                      <div className="row">
                        <div className="col-12">
                        {t.map(a => (
                          <div className="government__item">
                            {a.name}
                            <div className="text-right mt-2">
                            <Link to={"/government/" + a.one_id} className="more">Подробнее <i className="fa fa-angle-right ml-1"></i></Link>
                            </div>
                          </div>
                        ))}

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <Title title="Выдача сертификатов" />
                  </div>

                  <div className="col-12">
                    <div className="government__content">
                      <div className="row">
                        <div className="col-12">
                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>

                          <div className="government__item">
                            Экологическая сертификация ввозимых в республику
                            узбекистан новых автотранспортных средств категорий
                            «м2», «м3» и «n2», оборудованных бензиновыми и
                            дизельными двигателями, на соответствие требованиям
                            экологического класса не ниже «евро-2»
                            <div className="text-right mt-2">
                              <a href="#" className="more">
                                Подробнее{" "}
                                <i className="fa fa-angle-right ml-1"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <ul className="d-flex justify-content-center general__pagination align-items-center">
                      <li className="prev">
                        <span className="fa fa-angle-left"></span>
                      </li>
                      <li className="active">
                        <Link>1</Link>
                      </li>

                      <li>
                        <Link>2</Link>
                      </li>

                      <li>
                        <Link>3</Link>
                      </li>
                      <li>
                        <Link>4</Link>
                      </li>
                      <li>
                        <Link>5</Link>
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
    );
  }
}

const mapStateToProps = state => ({
  service: state.services.services,
  lang: state.lang.lang
});

export default connect(mapStateToProps, {services})(Government);
