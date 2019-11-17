import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component {
  glassSwitch(param) {
    switch (param) {
      case "ru":
        return "Версия для слабовидящих";
      case "uz":
        return "Ko'zi ojizlar uchun versiya";
      case "en":
        return "Version for the visually impaired";
      case "oz":
        return "Кўзи ожизлар учун версия";
    }
  }
  mobileSwitch(param) {
    switch (param) {
      case "ru":
        return "Мобильная версия";
      case "uz":
        return "Telefon varianti";
      case "en":
        return "Mobile version";
      case "oz":
        return "Телефон варианти";
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="header__top-settings">
          <img src="/img/eyeglass.png" alt="" />
          <span> {this.glassSwitch(this.props.lang)}</span>
        </div>
        <div className="header__top-settings lst">
          <img src="/img/phone.png" alt="" />
          <span>{this.mobileSwitch(this.props.lang)}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lang: state.lang.lang
});
export default connect(mapStateToProps)(Settings);
