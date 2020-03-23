import React from 'react';
import {shallow} from 'enzyme';
import Projects from './projects';

describe('Projects Component', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Projects />)));

  it('should render List Group', function() {
    expect(wrapper.find('ListGroup').length).toEqual(1);
  });
});
