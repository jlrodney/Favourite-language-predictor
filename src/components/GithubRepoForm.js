import React from 'react';
import PropTypes from 'prop-types';

const GithubRepoForm = (props) => {
  let input;
  const { onSubmit } = props;
  return (
    <div>
      <span>
        <h2 className="sub-header">Please enter a Github username</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.value !== '') {
              onSubmit(input.value);
              input.value = '';
            }
          }}
        >
          <input
            type="text"
            placeholder="Github Username..."
            ref={(node) => {
              input = node;
            }}
          />
          <button className="submit">Search!</button>
        </form>
      </span>
    </div>
  );
};

GithubRepoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default GithubRepoForm;
