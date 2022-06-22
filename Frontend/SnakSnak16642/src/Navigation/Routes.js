// import Onboarding from '../screens/authFlow/Launch/index.js';
import Onboarding from '../screens/authFlow/Launch/index.js';
import Onboarding2 from '../screens/authFlow/Launch2/index.js';

export const ONBOARDING_PATH = 'Onboarding';
export const ONBOARDING_PATH_2 = 'Onboarding2';

export const AUTH_ROUTES = [
  {
    component: Onboarding2,
    path: ONBOARDING_PATH_2,
  },
  {
    component: Onboarding,
    path: ONBOARDING_PATH,
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
