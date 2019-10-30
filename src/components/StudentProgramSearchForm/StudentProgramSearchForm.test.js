import React from 'react';
import { render } from '@testing-library/react';
import StudentProgramSearchForm from './StudentProgramSearchForm';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentProgramSearchForm', () => {
  let wrapper, mockStudents;

  beforeEach(() => {
    mockStudents = [
      {id: 1, name: 'Eric'},
      {id: 2, name: 'Aurie'}
    ]
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentProgramSearchForm students={mockStudents} collapsed={true} collapseModal={jest.fn()} identifyStudent={jest.fn()} />
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});