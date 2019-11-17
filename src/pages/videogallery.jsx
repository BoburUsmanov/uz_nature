import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Videogallery extends Component {
  render() {
    return (
      <div className="video general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="video__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Видеогалерея</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Видеогалерея" />
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
  events: state.events.events,
  lang: state.lang.lang
});

export default connect(mapStateToProps)(Videogallery);
