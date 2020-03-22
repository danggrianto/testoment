import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

import Header from './components/header';

describe('App', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render Header component', function() {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
