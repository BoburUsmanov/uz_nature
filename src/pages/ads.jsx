import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { connect } from "react-redux";
import Title from "../components/common/title";
import { Link } from "react-router-dom";
import Useful from "../components/common/useful";
import { ads } from "./../redux/actions/actions";
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2
  } from "react-html-parser";
  
 class Ads extends Component {
    componentDidMount() {
      
          this.props.ads();
    }
    render() {
        let a = this.props.adds.find(n => {
            return (
              n.one_id === this.props.match.params.id && n.lang === this.props.lang
            );
          });
          let others = this.props.adds.filter(n => {
            return (
              n.one_id !== this.props.match.params.id && n.lang === this.props.lang
            );
          });
      
         
      
        return (
           <div className="general__container news">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-8">
                            <div className="ads__single h-100">
                                <div className="row">
                                <div className="col-12 mb-2">
                                        <ul className="news__links d-flex">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>
                                            <li>
                                                <Link to="/news">объявления</Link>
                                            </li>
                                        </ul>
                                    </div>

                                   
                                    <div className="col-12">
                                    <Title title={a.name ? a.name : null} />
                                    <div className="text-right">
                                        <span className="date d-flex justify-content-end mr-5 my-3">
                                            <div className="day"><span className="fa fa-calendar"></span>{a.c_d}.{a.c_m}.{a.c_y}</div>
                                            <div className="eye">
                                                <span className="fa fa-eye"></span> {a.view}
                                            </div>
                                        </span>
                                    </div>
                                    <p className="ads__single-text">
                                    {ReactHtmlParser(a.description)}
                                    </p>
                                </div>
                                   

                                </div>
                            </div>
                       </div>

                       <div className="col-4">
                            <Sidebar />
                        </div>

                        <div className="col-12" style={{ padding: '0' }}>
                            <Useful />
                        </div>
                   </div>
               </div>
           </div>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang.lang,
    adds: state.ads.ads
})
export default connect(mapStateToProps, {ads})(Ads)
