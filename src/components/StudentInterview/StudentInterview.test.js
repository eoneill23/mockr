import React from 'react';
import { render } from '@testing-library/react';
import StudentInterview from './StudentInterview';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentInterview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentInterview summary={'Great job'} id={1} collapseModal={jest.fn()} identifyInterview={jest.fn()} collapsed={true}/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});