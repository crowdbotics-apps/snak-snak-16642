import * as TYPES from '../types';

//Email Validation Action
export const getLabels = (cbSuccess) => {
  return {
    type: TYPES.GET_LABELS_REQUEST,
    cbSuccess,
  };
};