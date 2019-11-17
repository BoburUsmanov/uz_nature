import React, { Component } from "react";
import Title from "../components/common/title";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import { regions } from "../redux/actions/actions";
import { connect } from "react-redux";

class TerritorialSingle extends Component {
  componentDidMount() {
    this.props.regions();
  }
  render() {
    let region = this.props.regions_all.find(r => {
      return (
        r.one_id === this.props.match.params.id && r.lang === this.props.lang
      );
    });
    let others = this.props.regions_all.filter(r => {
      return (
        r.one_id !== this.props.match.params.id && r.lang === this.props.lang
      );
    });
    console.log(region);
    return (
      <div className="territorial general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="territorial__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Территориальные органы</Link>
                      </li>
                      <li>
                        <Link to="/news">
                          Государственный комитет Республики Узбекистан{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12">
                    <Title title={region.name} />
                  </div>
                  <div className="col-12">
                    <div className="territorial__content">
                      <p className="territorial__text">{region.organ}</p>
                    </div>
                  </div>
                </div>
                <div className="haspadding">
                  <div className="row mb-5 align-items-center">
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/map.png" alt="" />
                            <div className="bold ml-3">Адрес:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.address}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/bus.png" alt="" />
                            <div className="bold ml-3">Автобусы:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.bus}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5 align-items-center">
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/map.png" alt="" />
                            <div className="bold ml-3">Ориентир:</div>
                          </div>
                        </div>
                        <div className="col-8"> {region.orienter}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/clock.png" alt="" />
                            <div className="bold ml-3">Режим работы:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.work_hour}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5 align-items-center">
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/call.png" alt="" />
                            <div className="bold ml-3">Приемная:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.reception}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/dinner.png" alt="" />
                            <div className="bold ml-3">Обед:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.dinner}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5 align-items-center">
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/call.png" alt="" />
                            <div className="bold ml-3">Канцелярия:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.chancellery}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/clock.png" alt="" />
                            <div className="bold ml-3">Выходные:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.day_off}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5 align-items-center">
                    <div className="col-6">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <img src="/img/icons/fax.png" alt="" />
                            <div className="bold ml-3">Факс:</div>
                          </div>
                        </div>
                        <div className="col-8">{region.faks}</div>
                      </div>
                    </div>
                  </div>

                  <div className="territorial__map mb-5">
                    <iframe
                      src="https://maps.google.com/maps?q=41.2983868,69.2708828&hl=es;z=14&amp;output=embed"
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                    ></iframe>
                  </div>

                  <div className="territorial__guide">
                    <h2>Руководство</h2>
                    <div class="center__item">
                      <div class="row no-gutters">
                        <div class="col-5 center__item-left">
                          <img
                            src={"http://uz.orikzor.com/" + region.photo}
                            alt=""
                          />
                        </div>
                        <div class="col-7 center__item-right">
                          <h2 class="center__item-title">{region.organ}</h2>
                          <p class="center__item-text">{region.chairman}</p>
                          <p class="center__item-text">
                            Телефон: {region.chancellery}
                          </p>
                          <p class="center__item-text">
                            Электронная почта: {region.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="territorial__others mt-5">
                    <p class="territorial__text">
                      Выберите территориальное управление
                    </p>
                    <div class="row no-gutters">
                      <div class="territorial__item active">
                        Государственный комитет Республики Узбекистан по
                        экологии и охране окружающей среды
                      </div>
                    </div>
                    <div class="row">
                      {others.map(o => (
                        <div class="col-4">
                          <Link
                            class="territorial__item"
                            to={"/tsingle/" + o.one_id}
                          >
                            {o.name}
                          </Link>
                        </div>
                      ))}
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
  regions_all: state.regions.regions,
  lang: state.lang.lang
});

export default connect(mapStateToProps, { regions })(TerritorialSingle);
