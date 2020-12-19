import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  settings: null,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const settingsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: actions.data,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_SETTINGS_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };

    default:
      return state;
  }
};
export default settingsReducer;
