import React from 'react';
import {shallow} from 'enzyme';
import Projects from './projects';

describe('Header', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Projects />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render title Projects', function() {
    expect(wrapper.find('h1').text()).toEqual('Projects');
  });

  it('should render list of projects', function() {
    expect(wrapper.find('ListGroup').length).toEqual(1);
  });
});
