import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});
