import React, { Component } from 'react';
import Title from './title';
import {ru} from './../../lang/ru';
import {uz} from './../../lang/uz';
import {en} from './../../lang/en';
import LinkSlider from '../linkSlider';
import {news} from './../../redux/actions/actions';
import {connect} from 'react-redux';

 class Useful extends Component {

    componentDidMount() {
        this.props.news();
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
            <div className="main__useful">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="main__useful-box">
                            <div className="row">
                                <div className="col-12">
                                    <Title title={ln['useful links']} />
                                </div>
                                <div className="col-12">
                                    <LinkSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, { news })(Useful)