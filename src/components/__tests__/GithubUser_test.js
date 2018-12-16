import React from 'react';
import { shallow } from 'enzyme';
import GithubUser from '../GithubUser';

function setup() {
  const props = {
    getRepos: { isFetching: false, repos: [{ a: 'b' }, { b: 'c' }] },
  };
  const enzymeWrapper = shallow(<GithubUser {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
function altSetup() {
  const props = {
    getRepos: {
      isFetching: false,
      repos: { message: 'Not Found' },
    },
  };
  const enzymeWrapper = shallow(<GithubUser {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
function altSetup2() {
  const props = {
    getRepos: {
      isFetching: true,
    },
  };
  const enzymeWrapper = shallow(<GithubUser {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
function altSetup3() {
  const props = {
    getRepos: {
      isFetching: false,
      repos: [],
      fetched: true,
    },
  };
  const enzymeWrapper = shallow(<GithubUser {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
describe('components', () => {
  describe('GithubUser', () => {
    it('should render Username not found when message is not found', () => {
      const { enzymeWrapper } = altSetup();
      expect(enzymeWrapper.find('h3').hasClass('not-found')).toBe(true);
      expect(enzymeWrapper.find('h3').text()).toBe('Username not found');
    });
    it('should render fave language text when repos length is greater than 0', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h2').hasClass('fave-lang')).toBe(true);
      expect(enzymeWrapper.find('h2').text()).toEqual('Your favourite lanuage is:');
    });
    it('should render calculating when isfetching is true', () => {
      const { enzymeWrapper } = altSetup2();
      expect(enzymeWrapper.find('h3').text()).toEqual('Calculating...');
    });
    it('should render no repos found for that user when 0 repos', () => {
      const { enzymeWrapper } = altSetup3();
      expect(enzymeWrapper.find('h3').text()).toEqual('No repos found for that user');
    });
  });
});
