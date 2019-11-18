import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { interviews } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class Interviews extends Component {
  componentDidMount() {
    this.props.interviews()
}
  render() {
    let t = this.props.interview.filter(n=>{
      return n.lang === this.props.lang
  });
    return (
      <div className="interviews general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="interviews__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">интервью и статьи</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="интервью и статьи" />
                  </div>
                  <div className="col-12">
                    
                  {t.map(a => (
                  <div className="interviews__item">
                    
                      <div className="interviews__item-day">
                        <span className="day">14</span>
                        <span className="month">Июня</span>
                        <span className="month">2019</span>
                      </div>
                      <div className="interviews__item-content">
                          <h2 className="title">Тема:  {a.name}</h2>
                          <div className="text-right">
                              <span className="eye"> <i className="fa fa-eye mr-1"></i> 154</span>
                              <Link to={'/interviews/' + a.one_id} className="more ml-5">Подробнее <i className="fa fa-angle-right"></i></Link>
                          </div>
                      </div>
                    

                    </div>
                    ))}
                    <div className="interviews__item">
                      <div className="interviews__item-day">
                        <span className="day">14</span>
                        <span className="month">Июня</span>
                        <span className="month">2019</span>
                      </div>
                      <div className="interviews__item-content">
                          <span className="category">
                          Категория
                          </span>
                          <h2 className="title">Тема:  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                          <div className="text-right">
                              <span className="eye"> <i className="fa fa-eye mr-1"></i> 154</span> <a href="#" className="more ml-5">Подробнее <i className="fa fa-angle-right"></i></a>
                          </div>
                      </div>
                    </div>

                    <div className="interviews__item">
                      <div className="interviews__item-day">
                        <span className="day">14</span>
                        <span className="month">Июня</span>
                        <span className="month">2019</span>
                      </div>
                      <div className="interviews__item-content">
                          <span className="category">
                          Категория
                          </span>
                          <h2 className="title">Тема:  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                          <div className="text-right">
                              <span className="eye"> <i className="fa fa-eye mr-1"></i> 154</span> <a href="#" className="more ml-5">Подробнее <i className="fa fa-angle-right"></i></a>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5">
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
  interview: state.interviews.interviews,
  lang: state.lang.lang
});

export default connect(mapStateToProps, {interviews})(Interviews);
