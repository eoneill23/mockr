import React from 'react';
import { render } from '@testing-library/react';
import StudentSearch from './StudentSearch';
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
        <StudentSearch students={mockStudents} collapsed={true} collapseModal={jest.fn()} identifyStudent={jest.fn()} />
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});