import React, { Component } from "react";
import Title from "../components/common/title";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import { regions } from "../redux/actions/actions";
import { connect } from "react-redux";

class Territorial extends Component {
  componentDidMount() {
    this.props.regions();
  }
  render() {
    let regions_array = this.props.regions_all.filter(region => {
      return region.lang === this.props.lang;
    });

    console.log(regions_array);
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
                    </ul>
                  </div>

                  <div className="col-12">
                    <Title title="Территориальные органы" />
                  </div>
                  <div className="col-12">
                    <div className="territorial__content">
                      <p className="territorial__text">
                        Выберите территориальное управление
                      </p>
                      <div className="row no-gutters">
                        <div className="territorial__item active">
                          Государственный комитет Республики Узбекистан по
                          экологии и охране окружающей среды
                        </div>
                      </div>
                      <div className="row">
                        {regions_array.map(r => (
                          <div className="col-4">
                            <Link to={"/tsingle/"+r.one_id} className="territorial__item">
                             {r.name}
                            </Link>
                          </div>
                        ))}
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

const mapStateToProps = state => ({
  regions_all: state.regions.regions,
  lang: state.lang.lang
});

export default connect(mapStateToProps, { regions })(Territorial);
