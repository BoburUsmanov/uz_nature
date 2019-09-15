import React, { Component } from 'react';
import MainSlider from '../components/mainSlider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ru } from './../lang/ru';
import { uz } from './../lang/uz';
import { en } from './../lang/en';
import Title from '../components/common/title';
import { events_all } from './../redux/actions/actions';
import Anchor from '../components/common/link';
import MapUzbekistan from '../components/map';
import PhotoSlider from '../components/photoSlider';
import LinkSlider from '../components/linkSlider';
import Useful from '../components/common/useful';



class Home extends Component {

    componentDidMount() {
        this.props.events_all('ru')
    }
    render() {
        var ln;
        if (this.props.lang == 'ru') {
            ln = this.props.ru;
        }
        else if (this.props.lang == 'uz') {
            ln = this.props.uz;
        } else {
            ln = this.props.en;
        }
        return (
            <div className="main general__container">

                <div className="main__top">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-9">
                                <MainSlider />
                            </div>
                            <div className="col-3">
                                <div className="main__services">
                                    <Link to="/" className="main__services-link row no-gutters">
                                        <span className="col-2"><img src="/img/main/phone.png" /></span>
                                        <span className="col-10">
                                            {ln['feedback']}
                                        </span>
                                    </Link>
                                    <Link to="/" className="main__services-link row no-gutters">
                                        <span className="col-2"><img src="/img/main/people1.png" /></span>
                                        <span className="col-10">{ln['For legal entities']}</span>
                                    </Link>
                                    <Link to="/" className="main__services-link row no-gutters">
                                        <span className="col-2">
                                            <img src="/img/main/people2.png" />
                                        </span>
                                        <span className="col-10">
                                            {ln['For individuals']}
                                        </span>
                                    </Link>
                                    <Link to="/" className="main__services-link row no-gutters">
                                        <span className="col-2"> <img src="/img/main/question.png" /></span>
                                        <span className="col-10">{ln['Ask a Question']}</span>
                                    </Link>
                                    <Link to="/" className="main__services-link">
                                        <span className="col-2"><img src="/img/main/call.png" /></span>
                                        <span className="col-10">{ln['Hot line']}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main__news">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="main__news-left">
                                    <Title title={ln['last news']} />
                                    <div className="main__news-box">
                                        {this.props.news ? this.props.news.map(n =>
                                            <div className="row align-items-center main__news-list no-gutters">
                                                <div className="col-2 news-date">05.08.2019</div>
                                                <div className="col-10"><Link to="" className="news-link">{n.name}</Link></div>
                                            </div>
                                        ) : 'news not found'}
                                    </div>
                                    <Anchor text={ln['more']} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="main__news-right">
                                    <Title title={ln['ecology']} />
                                    <div className="main__news-box">
                                        {this.props.news ? this.props.news.map(n =>
                                            <div className="row align-items-center main__news-list no-gutters">
                                                <div className="col-2 news-date">05.08.2019</div>
                                                <div className="col-10"><Link className="news-link">{n.name}</Link></div>
                                            </div>
                                        ) : 'news not found'}
                                    </div>
                                    <Anchor text={ln['more']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="main__activities">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="activity__box">
                                    <div className="row no-gutters">
                                        <div className="col-12"> <Title title={ln['MAIN DIRECTIONS OF ACTIVITY']} /></div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Atmospheric air and ozone layer']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Water resources']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Land resources and subsoil']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Waste management']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Biodiversity']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row no-gutters">
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['OPT']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Environmental monitoring']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['State eco supervision']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['State expertise']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Environmental certification']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row no-gutters">
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Eco energy']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Education']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Scientific activity']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['Fund']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="activity__item">
                                                <h2 className="activity__title">
                                                    {ln['International']}
                                                </h2>
                                                <div className="circle">
                                                    <img src="/img/directions/earth.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main__photo ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="main__photo-box">
                                    <div className="row">
                                        <div className="col-12">
                                            <Title title={ln['PHOTO REPORTS']} />
                                        </div>
                                        <div className="col-12">
                                            <div className="main__photo-slider">
                                                <PhotoSlider />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="padding-slider"><Anchor text={ln['more']} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main__map">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="main__map-box">
                                    <div className="row">
                                        <div className="col-12">
                                            <Title title={ln['Map with territorial authorities']} />
                                        </div>
                                        <MapUzbekistan />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <Useful />
             
            </div >
        )
    }
}
const mapStateToProps = state => ({
    news: state.events.events,
    lang: state.lang.lang,
    ru: ru,
    uz: uz,
    en: en
})

export default connect(mapStateToProps, { events_all })(Home)