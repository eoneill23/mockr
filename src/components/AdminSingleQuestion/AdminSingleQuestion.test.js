import React from 'react';
import { render } from '@testing-library/react';
import AdminSingleQuestion from './AdminSingleQuestion';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminSingleQuestion', () => {
  let wrapper, mockQuestion, mockToggleQuestionActiveStatus;

  beforeEach(() => {
    mockQuestion = {
      id: 1,
      body: 'What is the meaning of life?'
    }
    mockToggleQuestionActiveStatus = jest.fn()
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <AdminSingleQuestion props={{...mockQuestion}} toggleQuestionActiveStatus={mockToggleQuestionActiveStatus}/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});