import * as TYPES from '../../actions/types';

const initialState = {
  labels: null,
};
const notificationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.REGISTER_NOTIFY_REQUEST:
      return {
        ...state,
        labels: actions.data,
      };
    case TYPES.REGISTER_NOTIFY_SUCCESS:
      return {
        ...state,
        labels: actions.data,
      };
    case TYPES.REGISTER_NOTIFY_FAILURE:
      return {
        ...state,
        labels: actions.data,
      };
    default:
      return state;
  }
};
export default notificationReducer;
