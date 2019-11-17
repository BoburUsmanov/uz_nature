import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Title from "../components/common/title";
import { legals, legalsphoto } from "./../redux/actions/actions";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class Legalactivity extends Component {
  componentDidMount() {
    this.props.legals();
    this.props.legalsphoto();
  }
  render() {
    let s = this.props.legal.find(n => {
      return (
        n.one_id === this.props.match.params.id && n.lang === this.props.lang
      );
    });

    let photos = this.props.photo.filter(n => {
      return (
        n.legal_id === this.props.match.params.id 
      );
    });
    return (
      <div className="legalactivity general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="legalactivity__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Правовые основы деятельности</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title={s.name} />
                  </div>
                </div>

                <div className="haspadding">
                  <div className="row">
                    <div className="col-12 mb-5 text-center">
                      <img
                        src={"http://uz.orikzor.com" + s.photo}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12">
                      {ReactHtmlParser(s.description)}
                      <div className="row">
                        {photos.map(p => (
                          <div className="col-6 mt-3">
                            <img src={"http://uz.orikzor.com" + p.photo} className="img-fluid" alt="" />
                          </div>
                        ))}
                      </div>

                      <ul className="d-flex header__social align-items-center share justify-content-end">
                        <li className="share__text">Поделиться:</li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube-play" />
                          </a>
                        </li>
                      </ul>
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
    );
  }
}
const mapStateToProps = state => ({
  lang: state.lang.lang,
  photo: state.legalsphoto.legalsphoto,
  legal: state.legals.legals
});
export default connect(mapStateToProps, { legals, legalsphoto })(Legalactivity);
