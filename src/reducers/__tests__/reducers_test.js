import reducer from '../reducers';
import getRepos from '../reducers';
import {
  REQUEST_REPOS,
  RECEIVE_REPOS_SUCCESS,
  RECEIVE_REPOS_ERROR,
} from '../../constants/ActionTypes';

describe('getRepos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ getRepos: { isFetching: false, repos: [] } });
  });

  const repoState = {
    isFetching: false,
    repos: [{ a: 'b' }, { b: 'c' }],
  };

  it('should handle REQUEST_REPOS', () => {
    expect(
      reducer([], {
        type: REQUEST_REPOS,
        repos: [{ a: 'b' }],
      }),
    ).toEqual({ getRepos: { isFetching: true, repos: [] } });

    expect(
      reducer(
        [
          { a: 'b' },
        ],
        {
          type: REQUEST_REPOS,
        },
      ),
    ).toEqual({ getRepos: { isFetching: true, repos: [] } });
  });

  describe('getRepos', () => {
    it('should respond to REQUEST_REPOS', () => {
      expect(getRepos({}, Object.assign({}, { type: 'REQUEST_REPOS' }, repoState))).toEqual({ getRepos: { isFetching: true, repos: [] } });
    });
  });

  it('should handle REQUEST_REPOS', () => {
    expect(
      reducer([], {
        type: REQUEST_REPOS,
      }),
    ).toEqual({ getRepos: { isFetching: true, repos: [] } });
    expect(
      reducer(
        [
          { a: 'b' },
        ],
        {
          type: RECEIVE_REPOS_SUCCESS,
        },
      ),
    ).toEqual({ getRepos: { isFetching: false, repos: undefined } });
  });

  it('should handle REQUEST_REPOS', () => {
    expect(
      reducer([], {
        type: REQUEST_REPOS,
      }),
    ).toEqual({ getRepos: { isFetching: true, repos: [] } });
    expect(
      reducer(
        [
          { a: 'b' },
        ],
        {
          type: RECEIVE_REPOS_ERROR,
        },
      ),
    ).toEqual({ getRepos: { isFetching: false, repos: undefined } });
  });
});
