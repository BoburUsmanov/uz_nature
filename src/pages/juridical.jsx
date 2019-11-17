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
      ownership: "",
      activity: "",
      inn:"",
      okonh:"",
      category:"",
      theme:"",
      phone: "",
      email: "",
      address: "",
      message: "",
      loading: true
    };

    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeOwnership = this.handleChangeOwnership.bind(this);
    this.handleChangeActivity = this.handleChangeActivity.bind(this);
    this.handleChangeInn = this.handleChangeInn.bind(this);
    this.handleChangeOkonh = this.handleChangeOkonh.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSubject(event) {
    this.setState({ subject: event.target.value });
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
  handleChangeOwnership(event) {
    this.setState({ ownership: event.target.value });
  }
  handleChangeActivity(event) {
    this.setState({ activity: event.target.value });
  }
  handleChangeInn(event) {
    this.setState({ inn: event.target.value });
  }
  handleChangeOkonh(event) {
    this.setState({ okonh: event.target.value });
  }
  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }
  handleChangeTheme(event) {
    this.setState({ theme: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    Axios.get(`http://uz.orikzor.com/juridicals?subject=${this.state.subject}&ownership=${this.state.ownership}&activity=${this.state.activity}&inn=${this.state.inn}&okonh=${this.state.okonh}&category=${this.state.category}&theme=${this.state.theme}&phone=${this.state.phone}&email=${this.state.email}&address=${this.state.address}&message=${this.state.message}`).then((response) => {
            console.log(response);
            alert('Cообщение успешно отправлено');
            this.setState({   subject: "",
            ownership: "",
            activity: "",
            inn:"",
            okonh:"",
            category:"",
            theme:"",
            phone: "",
            email: "",
            address: "",
            message: "", });
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
                        <Link to="/physical">Портал по обращениям субъектов предпринимательстваЮридическое лицо</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title="Портал по обращениям субъектов предпринимательстваЮридическое лицо" />
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
                                  value={this.state.subject}
                                  onChange={this.handleChangeSubject}
                                  className="general__input"
                                  placeholder="Наименование субъекта предпринимательства"
                                />
                                <label htmlFor="">Наименование субъекта предпринимательства</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.ownership}
                                  onChange={this.handleChangeOwnership}
                                  className="general__input"
                                  placeholder="Форма собственности"
                                />
                                <label htmlFor="">Форма собственности</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.activity}
                                  onChange={this.handleChangeActivity}
                                  className="general__input"
                                  placeholder="Вид основной деятельности"
                                />
                                <label htmlFor="">Вид основной деятельности</label>
                              </div>


                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.inn}
                                  onChange={this.handleChangeInn}
                                  className="general__input"
                                  placeholder="ИНН"
                                />
                                <label htmlFor="">ИНН</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.okonh}
                                  onChange={this.handleChangeOkonh}
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
                                  value={this.state.category}
                                  onChange={this.handleChangeCategory}
                                  className="general__input"
                                  placeholder="Категория субъекта предпринимательской деятельности"
                                />
                                <label htmlFor="">Категория субъекта предпринимательской деятельности</label>
                              </div>

                              <div className="form-group mb-5">
                                <input
                                  type="text"
                                  value={this.state.theme}
                                  onChange={this.handleChangeTheme}
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
