import React, { Component } from "react";
import { connect } from "react-redux";
import { events_all } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import {Link} from 'react-router-dom';

class Events extends Component {
  componentDidMount() {
    this.props.events_all(this.props.lang);
  }
  render() {
    return (
      <div className="event general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="event__box">
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

export default connect(
  mapStateToProps,
  { events_all }
)(Events);
