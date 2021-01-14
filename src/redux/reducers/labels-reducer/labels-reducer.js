import * as TYPES from '../../actions/types';

const initialState = {
  labels: null,
};
const labelsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_LABELS_SUCCESS:
      return {
        ...state,
        labels: actions.data,
      };
    default:
      return state;
  }
};
export default labelsReducer;
