import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});