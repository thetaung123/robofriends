import {CHANGE_SEARCH_FIELD} from "./constants";

const initialState = {
  searchField: ''
}

export const searchFieldReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return state = {...state, searchField: action.payload} //state is readonly , so, we can't change its properties directly
    default:
      return state
  }
}