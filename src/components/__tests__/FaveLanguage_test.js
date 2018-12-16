import React from 'react';
import { shallow } from 'enzyme';
import FaveLanguage from '../FaveLanguage';

function setup() {
  const props = {
    repos: [
      { language: 'Python' }, { language: 'Ruby' }, { language: null },
      { language: null }, { language: null }, { language: 'Python' },
    ],
  };
  const enzymeWrapper = shallow(<FaveLanguage {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('FaveLanguage', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('p').hasClass('fave-language')).toBe(true);
      expect(enzymeWrapper.find('p').text()).toEqual('Python');
    });
  });
});
