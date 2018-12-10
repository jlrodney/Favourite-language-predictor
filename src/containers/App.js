import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/actions';
import GithubRepoForm from '../components/GithubRepoForm';
import GithubUser from '../components/GithubUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(user) {
      const { dispatch } = this.props;
        dispatch(fetchRepos(user));
    }

    render() {
      const { getRepos } = this.props
        return (
          <div>
            <header>
            <h1 className="header">A developer's favourite language predictor!</h1>
            </header>
                  <div>
                      <GithubRepoForm onSubmit={this.handleSubmit} />
                      <div>
                        <GithubUser
                          getRepos={getRepos}
                      />
                      </div>
                  </div>

        </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { getRepos } = state;
  return {
      getRepos,
    }
}

export default connect(mapStateToProps)(App);
