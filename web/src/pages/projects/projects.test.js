import React from 'react';
import {shallow} from 'enzyme';
import Projects from './projects';

describe('Projects Page', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Projects />)));

  it('should render title Projects', function() {
    expect(wrapper.find('h1').text()).toEqual('Projects');
  });

  it('should render Projects component', function() {
    expect(wrapper.find('projects').length).toEqual(1);
  });

  it('should render addProject component', function() {
    expect(wrapper.find('addProject').length).toEqual(1);
  });
});
