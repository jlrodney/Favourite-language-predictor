import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
describe('components', () => {
  describe('GithubUser', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = altSetup();
      expect(enzymeWrapper.find('h3').hasClass('not-found')).toBe(true);
      expect(enzymeWrapper.find('h3').text()).toBe('Username not found');
    });
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h2').hasClass('fave-lang')).toBe(true);
      expect(enzymeWrapper.find('h2').text()).toEqual('Your favourite lanuage is:');
    });
  });
});
