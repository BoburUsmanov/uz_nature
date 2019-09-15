import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { change_language,events_all,find_region } from './../../redux/actions/actions';

class Language extends Component {
    handleLangUz = (e) => {
        this.props.change_language('uz');
        this.props.events_all('uz');
        this.props.find_region('uz',this.props.region_id)
    }
    handleLangRu = (e) => {
        this.props.change_language('ru');
        this.props.events_all('ru');
        this.props.find_region('ru',this.props.region_id)
    }
    handleLangEn = (e) => {
        this.props.change_language('en');
        this.props.events_all('en');
        this.props.find_region('en',this.props.region_id)
    }
 
    render() {
        return (
            <ul className="d-flex header__lang justify-content-end">
                <li className="active" onClick={this.handleLangRu}>
                    РУС
                </li>
                <li onClick={this.handleLangUz}>
                    UZ
                </li>
                <li  onClick={this.handleLangEn}>
                    ENG
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    music: state.events.events,
    region_id:state.region.id
})

export default connect(mapStateToProps, { change_language,events_all,find_region })(Language)