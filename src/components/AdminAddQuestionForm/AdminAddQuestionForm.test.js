import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdminAddQuestionForm from './AdminAddQuestionForm';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminAddQuestionForm', () => {
  let wrapper, mockCreateNewQuestion;

  beforeEach(() => {
    mockCreateNewQuestion = jest.fn();
    wrapper = render(
      <MockedProvider addTypename={false}>
        <AdminAddQuestionForm createNewQuestion={mockCreateNewQuestion} />
      </MockedProvider>
    )
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an input field', () => {
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText('Enter your question...');

    expect(input.name).toEqual('questionInput');
  });

  // it('should update questionInput when a change is detected in the input', () => {
  //   const setValue = jest.fn();
  //   const useStateSpy = jest.spyOn(React, "useState");
  //   useStateSpy.mockImplementation(initialValue => [initialValue, setValue]);
  //   const mockEvent = { target: { value: 'Hello' } }
  //   const { getByPlaceholderText } = wrapper;
  //   const input = getByPlaceholderText('Enter your question...');

  //   fireEvent.change(input, mockEvent);

  //   expect(setValue).toHaveBeenCalledWith('Hello');
  // });
});