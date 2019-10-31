import React from 'react';
import { render } from '@testing-library/react';
import StudentInterview from './StudentInterview';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentInterview', () => {
  let wrapper;
  let mockInterview;

  beforeEach(() => {
    mockInterview = {
      id: 1,
      users: [{firstName: 'bob', lastName: 'Saget', role: 0}, {firstName: 'Eric', lastName:'Oneezy', role: 1}],
      notes: [{score: 1, summary:'good job', question: {body: 'hi', id: 5}}],
      createdAt: 'slkdjalskdfjTAKLSJDALu'
    }
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentInterview summary={'Great job'} interview={mockInterview}id={1} collapseModal={jest.fn()} identifyInterview={jest.fn()} collapsed={true}/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});