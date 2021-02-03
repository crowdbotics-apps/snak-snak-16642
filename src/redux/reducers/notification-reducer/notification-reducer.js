import * as TYPES from '../../actions/types';

const initialState = {
  isRegister: false,
};
const notificationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.REGISTER_NOTIFY_REQUEST:
      return {
        ...state,
        isRegister: false,
      };
    case TYPES.REGISTER_NOTIFY_SUCCESS:
      return {
        ...state,
        isRegister: true,
      };
    case TYPES.REGISTER_NOTIFY_FAILURE:
      return {
        ...state,
        isRegister: false,
      };
    default:
      return state;
  }
};
export default notificationReducer;
