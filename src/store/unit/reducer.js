import {
  ADD_UNIT,
  REMOVE_UNIT,
} from './actions'

const initialState = {};

export default function units(state = initialState, action) {
  switch (action.type) {
    case ADD_UNIT: {
      return {
        ...state,
        ...action.payload,
      }
    }

    case REMOVE_UNIT: {
      delete state[action.payload];

      return state;
    }

    default: {
      return state;
    }
  }
}
