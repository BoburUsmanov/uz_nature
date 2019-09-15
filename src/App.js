import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import News from './pages/news';
import Header from './components/common/header';
import './css/main.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Events from './pages/events';
import { Link } from 'react-router-dom';
import Logo from './components/common/logo';
import Footer from './components/common/footer';
import About from './pages/about';
import Activities from './pages/activities';
import Documents from './pages/documents';
import singleNews from './pages/singleNews';
import FAQ from './pages/faq';
import Announcement from './pages/announcement';
import Ads from './pages/ads';
import Center from './pages/center';
import Territorial from './pages/territorial';
import TerritorialSingle from './pages/territorialSingle';
import Legalactivity from './pages/legalactivity';
import History from './pages/history';
import Leadership from './pages/leadership';
import Decree from './pages/decree';
import Cooperation from './pages/cooperation';
import Egovernment from './pages/egovernment';
import Anticorruption from './pages/anticorruption';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:id" component={singleNews} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/ads" component={Announcement} />
            <Route exact path="/ads/:id" component={Ads} />
            <Route exact path="/about" component={About} />
            <Route exact path="/activity" component={Activities} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/center" component={Center} />
            <Route exact path="/territorial" component={Territorial} />
            <Route exact path="/tsingle" component={TerritorialSingle} />
            <Route exact path="/legalactivity" component={Legalactivity} />
            <Route exact path="/history" component={History} />
            <Route exact path="/leadership" component={Leadership} />
            <Route exact path="/decree" component={Decree} />
            <Route exact path="/cooperation" component={Cooperation} />
            <Route exact path="/egovernment" component={Egovernment} />
            <Route exact path="/anticorruption" component={Anticorruption} />
            
          </Switch>
          <Footer />
        </div>

      </Provider>
    )
  }
}
