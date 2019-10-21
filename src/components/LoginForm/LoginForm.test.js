import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});