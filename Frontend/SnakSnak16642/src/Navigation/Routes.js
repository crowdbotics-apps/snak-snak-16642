import Onboarding from '../screens/authFlow/Onboarding/index.js';
import Welcome from '../screens/authFlow/Welcome/index.js';
import Auth from '../screens/authFlow/Auth/index.js';
import Verification from '../screens/authFlow/Verification/index.js';
import CreateProfile from '../screens/mainFlow/CreateProfile/index.js';

export const ONBOARDING_PATH = 'Onboarding';
export const WELCOME_PATH = 'Welcome';
export const AUTH_PATH = 'Auth';
export const VERIFICATION_PATH = 'Verification';
export const CREATE_PROFILE_PATH = 'CreateProfile';

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
  {
    component: Verification,
    path: VERIFICATION_PATH,
  },
  {
    component: CreateProfile,
    path: CREATE_PROFILE_PATH,
  },
];

export const MAIN_ROUTES = [
  {
    component: CreateProfile,
    path: CREATE_PROFILE_PATH,
  },
];
