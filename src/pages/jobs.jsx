import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { jobs } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class Jobs extends Component {
  componentDidMount() {
    this.props.jobs();
}
  render() {
    let t = this.props.job.filter(n=>{
      return n.lang === this.props.lang
  });
    return (
      <div className="vacancy general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="vacancy__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Вакансии</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Вакансии Территориальные" />
                  </div>

                  <div className="col-12">
                      <div className="vacancy__content">
                          <div className="row">
                          {t.map(a => (
                              <div className="col-12 mb-3">
                              <div class="ads__item">
                          <div class="date d-flex"><span class="day"><i class="fa fa-calendar"></i>{a.c_d}.{a.c_m}.{a.c_y}</span>
                                <div class="eye"><i class="fa fa-eye"></i>152</div>
                                </div>
                                <div class="content">
                                  <p>{a.name}</p>
                                  </div>
                                  <Link to={'/jobs/' + a.one_id} className="more">Подробнее <i className="fa fa-angle-right"></i></Link>
                                  </div>
                              </div>
                              ))} 
                          </div>
                      </div>
                  </div>

                  <div className="col-12"></div>

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
  job: state.jobs.jobs,
  lang: state.lang.lang
});

export default connect(mapStateToProps,{jobs})(Jobs);
