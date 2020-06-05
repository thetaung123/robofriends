import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

const initialState = {
  robots: [],
  isPending: false,
  error: null
}

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return state = {...state, isPending: true}
    case REQUEST_ROBOTS_SUCCESS:
      return state = {...state, isPending: false, robots: action.payload }
    case REQUEST_ROBOTS_FAILED:
      return state = { ...state, error: action.payload, isPending: false }
    default:
      return state;
  }
}