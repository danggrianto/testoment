import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Header />)));

  it('should render a <Navbar />', () => {
    expect(wrapper.find('Navbar').length).toEqual(1);
  });

  it('should render a NavbarBrand', function() {
    expect(wrapper.find('NavbarBrand').length).toEqual(1);
  });
  it('should render Brand text', () => {
    expect(wrapper.find('NavbarBrand').text()).toEqual('Testoment');
  });
});
