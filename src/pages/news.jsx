import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { news } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class News extends Component {
  componentDidMount() {
    this.props.news();
  }

  render() {
    let newws = this.props.newss.filter(n=>{
      return n.lang === this.props.lang
    });
    return (
      <div className="news general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="news__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Новости</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="НОВОСТИ" />
                  </div>
                  <div className="col-12">
                    <div className="news__content">
                      <div className="row">
                        <div className="col-12">
                          <ul className="news__filter d-flex">
                            <li className="active">Все</li>
                            <li>Новости</li>
                            <li>ЭКОНАДЗОР</li>
                            <li>события</li>
                          </ul>
                        </div>

                        {newws.map(n => (
                          <div className="col-6">
                            <div className="news__item">
                              <span className="news__date">
                              {n.c_d+'.'+n.c_m+'.'+n.c_y} <span className="fa fa-eye"></span>
                                {n.views}
                              </span>
                              <img
                                src={"http://uz.orikzor.com/" + n.photo}
                                alt=""
                              />
                              <h2 className="news__title">
                                <Link to={"/news/" + n.one_id}>{n.name}</Link>
                              </h2>
                            </div>
                          </div>
                        ))}
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

            <div className="col-12 " style={{ padding: "0" }}>
              <Useful />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  newss: state.news.news
});
export default connect(
  mapStateToProps,
  { news }
)(News);
