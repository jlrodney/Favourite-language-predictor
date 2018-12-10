import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/actions';
import GithubRepo from '../components/GithubRepo';

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
        return (
          <div>
            <header>
            <h1 className="header">Github user's favourite language predictor!</h1>
            </header>
                  <div>
                      <GithubRepo onSubmit={this.handleSubmit} />
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
