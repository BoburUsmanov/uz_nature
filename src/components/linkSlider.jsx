import React, { Component } from 'react';
import Slider from 'react-slick';

export default class LinkSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            padding:50
        };
        return (
           <Slider {...settings}>
               <div className="main__useful-item">
                   <img src="/img/links/logo-egovernment.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/strategy.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/lex.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/logo-egovernment.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/logo-egovernment.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/strategy.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/lex.png" alt=""/>
                   ] <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
               <div className="main__useful-item">
                   <img src="/img/links/logo-egovernment.png" alt=""/>
                   <div className="overlay">
                       <img src="/img/links/aaaaaa.png" alt=""/>
                       <div className="overlay-text">
                       Национальная база данных законодательства Республики Узбекистан
                       </div>
                   </div>
               </div>
           </Slider>
        )
    }
}
