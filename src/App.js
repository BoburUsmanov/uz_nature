import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import News from './pages/news';
import Header from './components/common/header';
import './css/main.css';
import './css/media.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Events from './pages/events';
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
import Tender from './pages/tender';
import TenderSingle from './pages/tenderSingle';
import Economic from './pages/economic';
import economicSingle from './pages/economicSingle';
import Projects from './pages/projects';
import Press from './pages/press';
import pressSingle from './pages/pressSingle';
import Interviews from './pages/interviews';
import interviewsSingle from './pages/interviewsSingle';
import Archive from './pages/archive';
import Vacancy from './pages/vacancy';
import Jobs from './pages/jobs';
import Requirements from './pages/requirements';
import Internship from './pages/internship';
import Government from './pages/government';
import governmentSingle from './pages/governmentSingle';
import Forms from './pages/forms';
import Calculator from './pages/calculator';
import Photogallery from './pages/photogallery';
import Videogallery from './pages/videogallery';
import Physical from './pages/form';
import Juridical from './pages/juridical';
import Ask from './pages/ask';
import Accreditation from './pages/accreditation';
import vacancySingle from './pages/vacancySingle';
import Opens from './pages/opens';
import opensSingle from './pages/opensSingle';
import Sitemap from './pages/sitemap';
import Symbols from './pages/symbols';
import Event from './pages/eventsSingle';

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
            <Route exact path="/events/:id" component={Event} />
            <Route exact path="/tenders" component={Tender} />
            <Route exact path="/tenders/:id" component={TenderSingle} />
            <Route exact path="/economics" component={Economic} />
            <Route exact path="/economics/:id" component={economicSingle} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/press" component={Press} />
            <Route exact path="/press/:id" component={pressSingle} />
            <Route exact path="/interviews" component={Interviews} />
            <Route exact path="/interviews/:id" component={interviewsSingle} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/vacancy" component={Vacancy} />
            <Route exact path="/vacancy/:id" component={vacancySingle} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/requirements" component={Requirements} />
            <Route exact path="/internship" component={Internship} />
            <Route exact path="/government" component={Government} />
            <Route exact path="/government/:id" component={governmentSingle} />
            <Route exact path="/forms" component={Forms} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/photogallery" component={Photogallery} />
            <Route exact path="/videogallery" component={Videogallery} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/ads" component={Announcement} />
            <Route exact path="/ads/:id" component={Ads} />
            <Route exact path="/about" component={About} />
            <Route exact path="/activity/:id" component={Activities} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/center" component={Center} />
            <Route exact path="/territorial" component={Territorial} />
            <Route exact path="/tsingle/:id" component={TerritorialSingle} />
            <Route exact path="/legalactivity" component={Legalactivity} />
            <Route exact path="/legalactivity/:id" component={Legalactivity} />
            <Route exact path="/history" component={History} />
            <Route exact path="/leadership" component={Leadership} />
            <Route exact path="/decree" component={Decree} />
            <Route exact path="/cooperation" component={Cooperation} />
            <Route exact path="/egovernment" component={Egovernment} />
            <Route exact path="/anticorruption" component={Anticorruption} />
            <Route exact path="/physical" component={Physical} />
            <Route exact path="/juridical" component={Juridical} />
            <Route exact path="/ask" component={Ask} />
            <Route exact path="/accreditation" component={Accreditation} />
            <Route exact path="/open" component={Opens} />
            <Route exact path="/open/:id" component={opensSingle} />
            <Route exact path="/sitemap" component={Sitemap} />
            <Route exact path="/symbols" component={Symbols} />
          </Switch>
          <Footer />
        </div>

      </Provider>
    )
  }
}
