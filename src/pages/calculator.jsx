import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="calculator__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">экологический Калькулятор</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="экологический Калькулятор" />
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

export default connect(mapStateToProps)(Calculator);
