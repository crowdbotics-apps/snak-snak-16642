import Onboarding from '../screens/authFlow/Onboarding/index.js';
import Welcome from '../screens/authFlow/Welcome/index.js';
import Auth from '../screens/authFlow/Auth/index.js';

export const ONBOARDING_PATH = 'Onboarding';
export const WELCOME_PATH = 'Welcome';
export const AUTH_PATH = 'Auth';

export const AUTH_ROUTES = [
  {
    component: Onboarding,
    path: ONBOARDING_PATH,
  },
  {
    component: Welcome,
    path: WELCOME_PATH,
  },
  {
    component: Auth,
    path: AUTH_PATH,
  },
];

// export const MAIN_ROUTES = [
//   {
//     component: SuccessStory,
//     path: SUCCESS_STORY_PATH,
//   },
//   {
//     component: SuccessStoryDetails,
//     path: SUCCESS_STORY_DETAILS_PATH,
//   },
//   {
//     component: BookedHotel,
//     path: BOOKED_HOTEL_PATH,
//   },
//   {
//     component: EmailInbox,
//     path: EMAIL_INBOX_PATH,
//   },
//   {
//     component: Dashboard,
//     path: DASHBOARD_PATH,
//   },

//   {
//     component: Interest,
//     path: INTEREST_PATH,
//   },
//   {
//     component: Profile,
//     path: PROFILE_PATH,
//   },
// ];
