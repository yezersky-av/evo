import { v4 as uuidv4 } from 'uuid';

export const ADD_UNIT = 'ADD_UNIT';
export const REMOVE_UNIT = 'REMOVE_UNIT';

const defaultUnit = {
  x: -1,
  y: -1,
  type: null,
  direction: 0,
};

export function addUnit(unit) {
  return async (dispatch) => {
    const unit = {
      ...defaultUnit,
      ...unit,
      id: uuidv4(),
    };

    dispatch({
      type: ADD_UNIT,
      payload: { [unit.id]: unit }
    });

    return unit;
  }
}

export function removeUnit(unitId) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_UNIT,
      payload: unitId
    });
  }
}
