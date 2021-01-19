import * as TYPES from '../../actions/types';
const initialState = {
  usersResult: null,
};
const searchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.USER_SEARCH_REQUEST:
      return {
        ...state,
        labels: actions.data,
      };
    case TYPES.USER_SEARCH_SUCCESS:
      return {
        ...state,
        usersResult: actions.data,
      };
    case TYPES.USER_SEARCH_FAILURE:
      return {
        ...state,
        labels: actions.data,
      };
    default:
      return state;
  }
};
export default searchReducer;
