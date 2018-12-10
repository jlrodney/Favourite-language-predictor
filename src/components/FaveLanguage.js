import React from 'react';
import PropTypes from 'prop-types';

function languageScores(arrayOfRepos) {
  const languageHash = {};
  // console.log(arrayOfRepos);
  for (let i = 0; i < arrayOfRepos.length; i++) {
    if (!languageHash[arrayOfRepos[i].language]) languageHash[arrayOfRepos[i].language] = 0;
    languageHash[arrayOfRepos[i].language]++;
  }
  // console.log(languageHash)
  delete languageHash.null;
  const number = Object.keys(languageHash).reduce((a, b) => ((languageHash[a] > languageHash[b]) ? a : b));
  // console.log(number)
  return number;
}
const FaveLanguage = props => (
  <p className="fave-language">{languageScores(props.repos)}</p>
);

FaveLanguage.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default FaveLanguage;
