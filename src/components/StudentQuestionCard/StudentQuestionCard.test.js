import React from 'react';
import { render } from '@testing-library/react';
import StudentQuestionCard from './StudentQuestionCard';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentQuestionCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentQuestionCard body={'Great job'} notes={'Great job'} id={1} collapseModal={jest.fn()} identifyQuestion={jest.fn()} collapsed={true}/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});