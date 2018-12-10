import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubRepoForm from '../GithubRepoForm';

function setup() {
  const props = {
    onSubmit: jest.fn(),
  };
  const enzymeWrapper = shallow(<GithubRepoForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
describe('components', () => {
  describe('GithubRepo', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h2').hasClass('sub-header')).toBe(true);
      expect(enzymeWrapper.find('h2').text()).toBe('Please enter a Github username');
      const GithubRepoInputProps = enzymeWrapper.find('input').props();
      expect(GithubRepoInputProps.placeholder).toEqual('Github Username...');
    });
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('button').text()).toEqual('Search!');
    });
  });
});
