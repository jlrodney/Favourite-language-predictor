import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../actions';
import {
  REQUEST_REPOS,
  RECEIVE_REPOS_SUCCESS,
  RECEIVE_REPOS_ERROR,
} from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch repos successfully', () => {
    fetchMock.get('*', {
      body: [{ id: 147920311, language: 'Ruby' },
        { id: 147920312, language: 'Ruby' },
        { id: 147920313, language: 'Ruby' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: REQUEST_REPOS },
      {
        type: RECEIVE_REPOS_SUCCESS,
        repos: [{ id: 147920311, language: 'Ruby' },
          { id: 147920312, language: 'Ruby' },
          { id: 147920313, language: 'Ruby' }],
      },
    ];

    const store = mockStore({ repos: [] });

    return store.dispatch(actions.fetchRepos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })

    it('should fetch repos successfully', () => {
      fetchMock.get("*", {throws: {error: 'Some No Good Error'}});
      const expectedActions = [
        {"type": "REQUEST_REPOS"},
        {"error": {error: "Some No Good Error"},
      "type": "RECEIVE_REPOS_ERROR"}
    ];

      const store = mockStore({ repos: [] });

      return store.dispatch(actions.fetchRepos()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });
});
