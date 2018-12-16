import React from 'react';
import PropTypes from 'prop-types';

function languageScores(arrayOfRepos) {
  const languageHash = {};
  for (let i = 0; i < arrayOfRepos.length; i++) {
    if (!languageHash[arrayOfRepos[i].language]) languageHash[arrayOfRepos[i].language] = 0;
    languageHash[arrayOfRepos[i].language]++;
  }
  delete languageHash.null;
  const language = Object.keys(languageHash).reduce((a, b) => ((languageHash[a] > languageHash[b]) ? a : b));
  // console.log(number)
  return language;
}
const FaveLanguage = props => (
  <p className="fave-language">{languageScores(props.repos)}</p>
);

FaveLanguage.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default FaveLanguage;
