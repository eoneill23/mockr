import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});