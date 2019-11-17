import React, { Component } from "react";
import { connect } from "react-redux";
import { change_language, news } from "./../../redux/actions/actions";

class Language extends Component {
  handleLangUz = e => {
    this.props.change_language("uz");
    this.props.news();
  };
  handleLangRu = e => {
    this.props.change_language("ru");
    this.props.news();
  };
  handleLangEn = e => {
    this.props.change_language("en");
    this.props.news();
  };
  handleLangUzc = e => {
    this.props.change_language("oz");
    this.props.news();
  };

  render() {
    return (
      <ul className="d-flex header__lang justify-content-end">
        <li className="active" onClick={this.handleLangRu}>
          РУС
        </li>
        <li onClick={this.handleLangUz}>UZB</li>
        <li onClick={this.handleLangUzc}>ЎЗБ</li>
        <li onClick={this.handleLangEn}>ENG</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  music: state.events.news
});

export default connect(mapStateToProps, { change_language, news })(Language);
