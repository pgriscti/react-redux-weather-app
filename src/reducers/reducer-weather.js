import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // we do not want to mutate state, but rather return a new array
      // adds action.payload.data to state
      return [action.payload.data, ...state];
  }

  return state;
}