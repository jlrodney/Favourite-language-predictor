import React from 'react';
import PropTypes from 'prop-types';
import FaveLanguage from './FaveLanguage';

const GithubUser = props => {
    const { getRepos } = props;
    const { repos, isFetching } = getRepos;
    return (
        <div>
            {!isFetching && repos.message === "Not Found" && (
                    <h3 className="not-found">Username not found</h3>
                )}
            {!isFetching &&
                repos.length > 0 && (
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
