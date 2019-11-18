import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { photos,photoss } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class Photogallery extends Component {
  componentDidMount() {
    this.props.photos()
    this.props.photoss()
}
  render() {

    let t = this.props.photo.filter(n=>{
      return n.lang === this.props.lang
  });
  let s = this.props.photo.find(n => {
    return (
      n.one_id === this.props.match.params.id 
    );
  });

  let photo_all = [];
  for(var i=0; i<t.length; i++){
    for(var j=0; j<this.props.photop.length; j++){
      if(this.props.photop[j].photoname_id == t[i].one_id ){
        photo_all.push(this.props.photop[j])
      }
    }
  }

    return (
      <div className="photo general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="photo__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Фотогалерея</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Фотогалерея" />
                  </div>

                  <div className="col-12">
                    <div className="photo__content">
                    {t.map(a => (
                      <div className="photo__item">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="photo__item-title">
                              {a.name}
                            </h2>
                          </div>
                          <div className="col-12 icons">
                            <div className="d-flex">
                              <span className="day mr-5">
                                <i className="fa fa-calendar mr-2"></i>3 Апреля
                                2019
                              </span>
                              <span className="number mr-5">
                                <i className="fa fa-file-image-o mr-2"></i>9
                              </span>
                              <span className="eye">
                                <i className="fa fa-eye mr-2"></i>154
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                            {photo_all.map(p => (
                                <div className="col-2">
                              
                                <img
                                  src={"http://uz.orikzor.com" + p.photo}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              ))}
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                      <div className="photo__item">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="photo__item-title">
                              Выпуск в дикую природу дрофы-красотки, занесенной
                              в Красную книгу
                            </h2>
                          </div>
                          <div className="col-12 icons">
                            <div className="d-flex">
                              <span className="day mr-5">
                                <i className="fa fa-calendar mr-2"></i>19 Апреля
                                2019
                              </span>
                              <span className="number mr-5">
                                <i className="fa fa-file-image-o mr-2"></i>9
                              </span>
                              <span className="eye">
                                <i className="fa fa-eye mr-2"></i>154
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-2">
                                <img
                                  src="/img/gallery/1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-2">
                                <img
                                  src="/img/gallery/2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/3.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/4.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/5.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/6.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="photo__item">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="photo__item-title">
                              Выпуск в дикую природу дрофы-красотки, занесенной
                              в Красную книгу
                            </h2>
                          </div>
                          <div className="col-12 icons">
                            <div className="d-flex">
                              <span className="day mr-5">
                                <i className="fa fa-calendar mr-2"></i>19 Апреля
                                2019
                              </span>
                              <span className="number mr-5">
                                <i className="fa fa-file-image-o mr-2"></i>9
                              </span>
                              <span className="eye">
                                <i className="fa fa-eye mr-2"></i>154
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-2">
                                <img
                                  src="/img/gallery/1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-2">
                                <img
                                  src="/img/gallery/2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/3.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/4.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/5.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/6.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="photo__item">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="photo__item-title">
                              Выпуск в дикую природу дрофы-красотки, занесенной
                              в Красную книгу
                            </h2>
                          </div>
                          <div className="col-12 icons">
                            <div className="d-flex">
                              <span className="day mr-5">
                                <i className="fa fa-calendar mr-2"></i>19 Апреля
                                2019
                              </span>
                              <span className="number mr-5">
                                <i className="fa fa-file-image-o mr-2"></i>9
                              </span>
                              <span className="eye">
                                <i className="fa fa-eye mr-2"></i>154
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-2">
                                <img
                                  src="/img/gallery/1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="col-2">
                                <img
                                  src="/img/gallery/2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/3.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/4.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/5.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>

                              <div className="col-2">
                                <img
                                  src="/img/gallery/6.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
  photo: state.photos.photos,
  photop: state.photos.photoss,
  lang: state.lang.lang
});

export default connect(mapStateToProps, {photos,photoss})(Photogallery);
