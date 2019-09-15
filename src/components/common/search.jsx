import React, { Component } from 'react';
import {ru} from './../../lang/ru';
import {uz} from './../../lang/uz';
import {en} from './../../lang/en';
import {connect} from 'react-redux';

 class Search extends Component {
   
    render() {
        var ln; 
        if(this.props.lang == 'ru'){
            ln = this.props.ru; 
        }
        else if (this.props.lang == 'uz') {
            ln = this.props.uz;
        } else {
            ln = this.props.en;
        }
        return (
            <form className="header__search">
                <input type="text" placeholder={ln['search']} />
            </form>
        )
    }
}

const mapStateToprops = state =>({
    lang:state.lang.lang,
    ru:ru,
    en:en,
    uz:uz
})
export default connect(mapStateToprops)(Search);