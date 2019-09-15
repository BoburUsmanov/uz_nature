import React, { Component } from 'react'
import Sidebar from '../components/common/sidebar';
import Useful from '../components/common/useful';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { find_event } from './../redux/actions/actions';
import Title from '../components/common/title';

 class Ads extends Component {
    componentDidMount() {
        this.props.find_event(this.props.lang, this.props.match.params.id);
    }
    render() {
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

                                   {this.props.ads.map(a=>
                                    <div className="col-12">
                                    <Title title={a.name}/>
                                    <div className="text-right">
                                        <span className="date d-flex justify-content-end mr-5 my-3">
                                            <div className="day"><span className="fa fa-calendar"></span>13.08.2019</div>
                                            <div className="eye">
                                                <span className="fa fa-eye"></span> 154
                                            </div>
                                        </span>
                                    </div>
                                    <p className="ads__single-text">
                                        {a.description}
                                    </p>
                                </div>
                                   )}

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
    ads: state.events.event
})
export default connect(mapStateToProps, { find_event })(Ads)
