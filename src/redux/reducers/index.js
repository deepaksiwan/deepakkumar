import { combineReducers } from 'redux';

import { mentor } from './mentorReducer';
import { banner } from './bannerReducer';
import { blogs } from './blogsReducer';
import { feature } from './featureReducer';
import { partner } from './partnerReducer';
import { subscribe } from './subscribeReducer';
import { testimonial } from './testimonialsReducer';
import { youtube } from './youtubeReducer';
import { program } from './programReducer';
import { packages } from './packagesReducer';
import { mentorDetails } from './mentorReducer';
import { blogsDetails } from './blogsReducer';
import { login } from './loginReducer';

export default combineReducers({
  mentorList: mentor,
  bannerList: banner,
  partnerList: partner,
  featureList: feature,
  blogsList: blogs,
  subscribeList: subscribe,
  testimonialList: testimonial,
  youtubeList: youtube,
  programList: program,
  packagesList: packages,
  mentorDetailsList: mentorDetails,
  blogsDetailsList: blogsDetails,
  loginDetails: login,
});
