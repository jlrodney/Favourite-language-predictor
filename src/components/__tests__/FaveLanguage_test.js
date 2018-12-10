import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FaveLanguage from '../FaveLanguage'
function setup() {
  const props = {
    repos: [{"language":"Python"}, {"language":"Ruby"}, {"language":"Python"}]
  }
  const enzymeWrapper = shallow(<FaveLanguage {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('FaveLanguage', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('p').hasClass('fave-language')).toBe(true)
    })
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('p').text()).toEqual("Python")
    })
  })
})
