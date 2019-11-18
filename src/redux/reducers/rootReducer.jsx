import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import languageReducer from './languageReducer';
import regionsReducer from './regionsReducer';
import comitetReducer from './comitetReducer';
import activitiesReducer from './activitiesReducer';
import newsReducer from './newsReducer';
import sectionsReducer from './sectionsReducer';
import legalsReducer from './legalsReducer';
import legalsphotoReducer from './legalsphotoReducer';
import adsReducer from './adsReducer';
import tendersReducer from './tendersReducer';
import economicsReducer from './economicsReducer';
import releasesReducer from './releasesReducer';
import interviewsReducer from './interviewsReducer';
import vacationsReducer from './vacationsReducer';
import jobsReducer from './jobsReducer';
import careersReducer from './careersReducer';
import servicesReducer from './servicesReducer';
import opensReducer from './opensReducer';
import photosReducer from './photosReducer';

export default combineReducers({
   news: newsReducer,
   events:eventsReducer,
   lang:languageReducer,
   regions:regionsReducer,
   persons:comitetReducer,
   activities:activitiesReducer,
   sections: sectionsReducer,
   legals: legalsReducer,
   legalsphoto: legalsphotoReducer,
   ads: adsReducer,
    tenders: tendersReducer,
    economics: economicsReducer,
    releases: releasesReducer,
    interviews: interviewsReducer,
    vacations: vacationsReducer,
    jobs: jobsReducer,
    careers: careersReducer,
    services: servicesReducer,
    opens: opensReducer,
    photos: photosReducer,
});