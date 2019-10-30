import React from 'react';
import { render } from '@testing-library/react';
import StudentInterviewModal from './StudentInterviewModal';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StudentInterviewModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <StudentInterviewModal id={1} summary={'Great job'} />
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});