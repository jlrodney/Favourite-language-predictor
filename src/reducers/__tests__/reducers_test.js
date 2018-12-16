import reducer from '../reducers';
import getRepos from '../reducers';
import {
  REQUEST_REPOS,
  RECEIVE_REPOS_SUCCESS,
  RECEIVE_REPOS_ERROR,
} from '../../constants/ActionTypes';

const initialState = {
  repos: [],
  isFetching: false,
  error: '',
  fetched: false,
};

describe('getRepos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ getRepos: initialState });
  });

  it('should handle REQUEST_REPOS', () => {
    const newState = reducer(initialState, { type: REQUEST_REPOS });
    expect(newState).toEqual({
      getRepos: {
        error: '', isFetching: true, repos: [], fetched: false,
      },
    });
  });

  it('should handle RECEIVE_REPOS_SUCCESS', () => {
    const newState = reducer(initialState, { type: RECEIVE_REPOS_SUCCESS, repos: [{ a: 'b', c: 'd' }] });
    expect(newState).toEqual({
      getRepos: {
        error: '', isFetching: false, repos: [{ a: 'b', c: 'd' }], fetched: true,
      },
    });
  });

  it('should handle RECEIVE_REPOS_ERROR', () => {
    const newState = reducer(initialState, { type: RECEIVE_REPOS_ERROR, error: 'ERROR: Incorrect username' });
    expect(newState).toEqual({
      getRepos: {
        error: 'ERROR: Incorrect username', isFetching: false, repos: [], fetched: true,
      },
    });
  });
});
