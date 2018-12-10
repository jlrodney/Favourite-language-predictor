import {
    REQUEST_REPOS,
    RECEIVE_REPOS_SUCCESS,
    RECEIVE_REPOS_ERROR,
} from '../constants/ActionTypes';

function requestRepos() {
    return {
        type: REQUEST_REPOS,
    };
}

function receiveRepos(json) {
    return {
        type: RECEIVE_REPOS_SUCCESS,
        repos: json,
    };
}

function receiveReposErr(error) {
    return {
        type: RECEIVE_REPOS_ERROR,
        error,
    };
}

export function fetchRepos(user) {
    return dispatch => {
        dispatch(requestRepos());
        return fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(json => dispatch(receiveRepos(json)))
            .catch(err => dispatch(receiveReposErr(err)));
    };
}
