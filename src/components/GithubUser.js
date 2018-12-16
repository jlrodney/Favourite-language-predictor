import React from 'react';
import PropTypes from 'prop-types';
import FaveLanguage from './FaveLanguage';

const GithubUser = (props) => {
  const { getRepos } = props;
  const { repos, isFetching, fetched } = getRepos;
  return (
    <div>
      {!isFetching && repos.message === 'Not Found' && (
        <h3 className="not-found">Username not found</h3>
      )}
      {fetched && repos.length === 0 && (
        <h3 className="not-found">No repos found for that user</h3>
      )}
      {isFetching && (
        <div>
          <h3 className="calculating">Calculating...</h3>
        </div>
      )}
      {!isFetching && repos.length > 0 && (
      <div>
        <h2 className="fave-lang">Your favourite lanuage is:</h2>
        <FaveLanguage repos={repos} />
      </div>
      )}
    </div>
  );
};

GithubUser.propTypes = {
  getRepos: PropTypes.object.isRequired,
};

export default GithubUser;
