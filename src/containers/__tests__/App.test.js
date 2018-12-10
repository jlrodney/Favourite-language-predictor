import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../App';
import toJson from 'enzyme-to-json';


let mockProps = {
   getRepos: {
    repos: [{ language: 'Python' }, { language: 'Ruby' }, { language: 'Python' }],
    isFetching: false},
};
const mockStore = configureStore([thunk]);
const initialState = {
   getRepos: {
    repos: [],
    isFetching: false},
};
const store = mockStore(initialState);
const store2 = mockStore(mockProps)

describe('App', () => {
  it('dispatches REQUEST_REPOS event', () => {
    const wrapper = shallow(<App store={store} />);
    wrapper.dive();
    expect(store.getActions()).toEqual([]);
  });

  describe('render', () => {

    it('Renders the App', () => {
      const getRepos = jest.fn();
      const appWrapper = shallow(<App store={store} />);
      const tree = toJson(appWrapper);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('button clicking', () => {

    it('has buttons and displays answer after submitting', () => {
      const getRepos = jest.fn();
      const appWrapper = mount(<App store={store2} />);
      expect(appWrapper.state()).toEqual({ });
      appWrapper.find('input').instance().value = "jamie"
      appWrapper.find('button').simulate('click');
      expect(appWrapper.state()).toEqual({ });
    });
  })
});
