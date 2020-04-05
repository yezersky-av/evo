import {
  ADD_UNIT,
  REMOVE_UNIT,
} from './actions'

const sizeX = 32;
const sizeY = 32;

const initialState = Array(sizeY).fill(null).map(
  (item, indexY) =>
    Array(sizeX)
      .fill(null)
      .map(
        (cell, indexX) => true
      )
);

export default function map(state = initialState, action) {
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
