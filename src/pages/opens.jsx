import React, { Component } from "react";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { opens } from "./../redux/actions/actions";
import Sidebar from "../components/common/sidebar";
import Useful from "../components/common/useful";

class Opens extends Component {
    componentDidMount() {
        this.props.opens()
    }
  render() {
    let t = this.props.open.filter(n=>{
        return n.lang === this.props.lang
    });
    return (
      <div className="archive general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="archive__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/opens">Открытие данные</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title="Открытие данные" />
                  </div>

                    <div className="col-12">
                       <div className="archive__top">
                       <div className="row">
                            <div className="col-9">
                                <div className="archive__topic">Тема</div>
                            </div>
                            <div className="col-3">
                                <div className="archive__formate">Скачать как:</div>
                            </div>
                        </div>
                       </div>
                       {t.map(a => (
                       <div className="archive__item">
                           <div className="row align-items-center">
                               <div className="col-9">
                               {a.name}
                               </div>
                               <div className="col-3">
                                    <div className="d-flex justify-content-between">
                                        <a href={a.zip} target="_blank" download><img src="/img/icons/zip.png" alt="" /></a>
                                        <a href={a.pdf} target="_blank" download><img src="/img/icons/pdf.png" alt="" /></a>
                                        <a href={a.doc} target="_blank" download><img src="/img/icons/doc.png" alt="" /></a>
                                        <a href={a.xls} target="_blank" download><img src="/img/icons/xls.png" alt="" /></a>
                                    </div>
                               </div>
                           </div>
                       </div>
                       ))}
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
console.log(opens)
const mapStateToProps = state => ({
    open: state.opens.opens,
  lang: state.lang.lang
});

export default connect(mapStateToProps, {opens})(Opens);
