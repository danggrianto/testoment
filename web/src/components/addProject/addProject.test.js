import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import AddProject from './addProject';

describe('Projects Page', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddProject />)));
  it('should render Add Project Button', function() {
    const button = wrapper.find('Button').at(0);
    expect(button.text()).toEqual('Add Project');
  });
  it('should render Modal Title', function() {
    expect(wrapper.find('ModalTitle').text()).toEqual('Add Project');
  });
  it('should open modal when add is clicked', function() {
    const add = wrapper.find('.addBtn');
    add.simulate('click');
    expect(wrapper.state().show).toEqual(true);
    const close = wrapper.find('.closeBtn');
    close.simulate('click');
    expect(wrapper.state().show).toEqual(false);
  });
  it('should close modal when save is clicked', function() {
    const add = wrapper.find('.addBtn');
    add.simulate('click');
    expect(wrapper.state().show).toEqual(true);
    const close = wrapper.find('.saveBtn');
    close.simulate('click');
    expect(wrapper.state().show).toEqual(false);
  });
});
