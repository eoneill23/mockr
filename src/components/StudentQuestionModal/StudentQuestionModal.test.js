import React from 'react';
import { render } from '@testing-library/react';
import StudentQuestionModal from './StudentQuestionModal';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentQuestionModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentQuestionModal body={'Great job'} collapseModal={jest.fn()} collapsed={true} />
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});