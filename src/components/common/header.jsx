import React from 'react'
import Language from './language';
import Settings from '../settings';
import Logo from './logo';
import Menu from './menu';
import Search from './search';


export default  function Header() {
    return (
        <header className="header">
            <div className="header__top general__container">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <ul className="d-flex header__social">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                   
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <Settings />
                        </div>

                        <div className="col-3 ">
                            <Language />
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__center general__container">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-3">
                           <Logo />
                        </div>
                        <div className="col-9 text-right">
                            <img src="/img/flag.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="header__bottom general__container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                           <Menu />
                        </div>
                        <div className="col-4">
                           <Search />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
