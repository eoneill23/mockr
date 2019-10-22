import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});
