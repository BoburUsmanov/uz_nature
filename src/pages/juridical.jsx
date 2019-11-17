import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";
import Axios from "axios";

export default class Juridical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      family: "",
      phone: "",
      email: "",
      address: "",
      message: "",
      loading: true
    };

    // this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    Axios.get(`http://uz.orikzor.com/physicals?name=${this.state.name}&phone=${this.state.phone}&email=${this.state.email}&message=${this.state.message}`).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error); });
  }

  render() {
    return (
      <div className="general__container anticorruption">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="anticorruption__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/physical">Портал по обращением физических лиц</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title="Портал по обращением физических лиц" />
                  </div>
                </div>
                <div className="haspadding">
                  <div className="row">
                    <div className="col-12">
                      <div className="anticorruption__content show">
                        <div className="row my-5 justify-content-center">
                          <div className="col-9 ">
                            <form  onSubmit={this.handleSubmit}>
                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.name}
                                  onChange={this.handleChangeName}
                                  className="general__input"
                                  placeholder="Наименование субъекта предпринимательства"
                                />
                                <label htmlFor="">Наименование субъекта предпринимательства</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.phone}
                                  onChange={this.handleChangePhone}
                                  className="general__input"
                                  placeholder="Форма собственности"
                                />
                                <label htmlFor="">Форма собственности</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.phone}
                                  onChange={this.handleChangePhone}
                                  className="general__input"
                                  placeholder="Вид основной деятельности"
                                />
                                <label htmlFor="">Вид основной деятельности</label>
                              </div>


                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.handleChangeEmail}
                                  className="general__input"
                                  placeholder="ИНН"
                                />
                                <label htmlFor="">ИНН</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.address}
                                  onChange={this.handleChangeAddress}
                                  className="general__input"
                                  placeholder="ОКОНХ"
                                />
                                <label htmlFor="">ОКОНХ</label>
                              </div>
                            
                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.phone}
                                  onChange={this.handleChangePhone}
                                  className="general__input"
                                  placeholder="+998 *** ** **"
                                />
                                <label htmlFor="">Номер телефона*</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.handleChangeEmail}
                                  className="general__input"
                                  placeholder="E-mail"
                                />
                                <label htmlFor="">Электронная почта</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.handleChangeEmail}
                                  className="general__input"
                                  placeholder="Категория субъекта предпринимательской деятельности"
                                />
                                <label htmlFor="">Категория субъекта предпринимательской деятельности</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.handleChangeEmail}
                                  className="general__input"
                                  placeholder="Тема обращения"
                                />
                                <label htmlFor=""> Тема обращения</label>
                              </div>
                           

                              <div className="form-group mb-5">
                                <textarea
                                  className="general__input"
                                  value={this.state.message}
                                  onChange={this.handleChangeMessage}
                                  placeholder="Текст"
                                ></textarea>
                                <label htmlFor="">Текст</label>
                              </div>
                              <div className="d-flex mt-5 justify-content-center">
                                <button
                                  className="general__send mr-5"
                                  type="submit"
                                >
                                  Отправить
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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
