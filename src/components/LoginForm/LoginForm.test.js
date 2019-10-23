import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});
