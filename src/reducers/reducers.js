import { combineReducers } from 'redux';
import {
  REQUEST_REPOS,
  RECEIVE_REPOS_SUCCESS,
  RECEIVE_REPOS_ERROR,
} from '../constants/ActionTypes';

export function getRepos(
  state = {
    isFetching: false,
    repos: [],
    error: '',
  },
  action,
) {
  switch (action.type) {
    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REPOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.repos,
      });
    case RECEIVE_REPOS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  getRepos,
});

export default rootReducer;
