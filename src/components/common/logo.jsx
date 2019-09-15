import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Logo extends Component {
    logoSwitch(param) {
        switch(param) {
            case 'ru':
              return 'Государственный комитет Республики Узбекистан по экологии и охране окружающей среды';
            case 'uz':
                return "O'zbekiston Respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo'mitasi"  
            case 'en':
              return ' State committee of the Republic of Uzbekistan on ecology and environmental protection';
          }
    }
    render() {
        return (
            <Link to='/' className="header__logo">
                <img src="/img/logo.png" alt="" />
                <span>{this.logoSwitch(this.props.lang)}</span>
            </Link>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang.lang
})
export default connect(mapStateToProps)(Logo);