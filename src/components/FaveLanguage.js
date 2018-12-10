import React from 'react';
import PropTypes from 'prop-types';

function languageScores(arrayOfRepos) {
  let languageFrequencyHash = {};
  // console.log(arrayOfRepos);
  for (var i = 0; i < arrayOfRepos.length; i++) {
    if(!languageFrequencyHash[arrayOfRepos[i].language])
    languageFrequencyHash[arrayOfRepos[i].language] = 0;
    languageFrequencyHash[arrayOfRepos[i].language]++;
  }
  // console.log(languageFrequencyHash)
  delete languageFrequencyHash.null
  let number = Object.keys(languageFrequencyHash).reduce((a,b) => (languageFrequencyHash[a]>languageFrequencyHash[b])? a:b)
  // console.log(number)
  return number
};
const FaveLanguage = props => (
                <p className="fave-language">{languageScores(props.repos)}</p>
);

FaveLanguage.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default FaveLanguage;
