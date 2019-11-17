import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";
import Axios from "axios";

export default class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      title: "",
      message: "",
      loading: true
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    Axios.get(`http://uz.orikzor.com/messages?name=${this.state.name}&phone=${this.state.phone}&title=${this.state.title}&message=${this.state.message}`).then((response) => {
            console.log(response);
            alert('Cообщение успешно отправлено');
            this.setState({ name: '', phone: "",title: "",message: "", });
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
                        <Link to="/ask">Задать вопрос</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 mb-5">
                    <Title title="Задать вопрос" />
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
                                  placeholder="Имя"
                                />
                                <label htmlFor="">Имя</label>
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
                                  value={this.state.title}
                                  onChange={this.handleChangeTitle}
                                  className="general__input"
                                  placeholder="Тема обращения"
                                />
                                <label htmlFor="">Тема обращения</label>
                              </div>

                             
                              <div className="form-group mb-5">
                                <textarea
                                  className="general__input"
                                  value={this.state.message}
                                  onChange={this.handleChangeMessage}
                                  placeholder="Описание"
                                ></textarea>
                                <label htmlFor="">Текст обращения</label>
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
