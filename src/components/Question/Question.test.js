import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <Question cur={1} id={1} pos={2} question={'Hello'} scored={false} fs={{note: jest.fn(), score: jest.fn(), next: jest.fn(), skip: jest.fn()}}/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});