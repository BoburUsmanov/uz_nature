import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { connect } from "react-redux";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import Useful from "../components/common/useful";
import { news } from "./../redux/actions/actions";
import Axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class singleNews extends Component {
  constructor(props) {
    super(props);
    this.state = { news_array: [], loading: true};
  }

  componentDidMount() {
    Axios.get(`http://uz.orikzor.com/newws`).then(response => {
      this.setState({ news_array: response.data.data, loading: false });
    });
  }
  render() {
    let s = this.props.newss.find(n => {
      return (
        n.one_id === this.props.match.params.id && n.lang === this.props.lang
      );
    });
    let others = this.props.newss.filter(n => {
      return (
        n.one_id !== this.props.match.params.id && n.lang === this.props.lang
      );
    });

    let single = this.state.news_array.find(n => {
      return (
        n.one_id === this.props.match.params.id && n.lang === this.props.lang
      );
    });

    return (
      <React.Fragment>
        <div className="news__single general__container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
               {this.state.loading &&  <div className="loader">
                    <img src="/img/loader.gif" alt=""/>
                </div>}
                {
                  !this.state.loading &&   <div className="news__box h-100">
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
                    <div className="col-12 mb-3">
                      <Title title={!this.state.loading && s.name} />
                    </div>
                    <div className="col-12">
                      <div className="news__container">
                        <img src={"http://uz.orikzor.com" + !this.state.loading && s.photo} alt="" />
                        <div className="news__icons">
                          <span className="day">
                            <i className="fa fa-calendar"></i>
                            {s.c_d && !this.state.loading + "." + !this.state.loading && s.c_m + "." + !this.state.loading && s.c_y}
                          </span>
                          <span className="eye">
                            <i className="fa fa-eye"></i>
                            {s.views}
                          </span>
                        </div>
                        <p className="news__text">
                          {ReactHtmlParser(!this.state.loading && s.description)}
                        </p>

                        <ul className="d-flex header__social ">
                          <li className="share__text">Поделиться:</li>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-rss"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-youtube-play"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mt-3">
                      <Title title="Другие новости " />
                      <div className="other__news">
                        <div className="row">
                          {others.map(other => (
                            <div className="col-6 mb-3">
                              <div className="other__news-item">
                                <Link to={"/news/" + other.one_id}></Link>
                                <img
                                  src={"http://uz.orikzor.com/" + other.photo}
                                  alt=""
                                />
                                <p>{other.name}</p>
                                <div className="date d-flex justify-content-between align-items-center">
                                  <span className="day">
                                    {other.c_d +
                                      "." +
                                      other.c_m +
                                      "." +
                                      other.c_y}
                                  </span>
                                  <span className="eye">
                                    <i className="fa fa-eye"></i>
                                    {other.views}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
              <div className="col-4">
                <Sidebar />
              </div>

              <div className="col-12" style={{ padding: "0" }}>
                <Useful />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  newss: state.news.news
});
export default connect(mapStateToProps, { news })(singleNews);
