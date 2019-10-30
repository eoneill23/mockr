import React from 'react';
import { render } from '@testing-library/react';
import AdminQuestions from './AdminQuestions';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminAllQuestionsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <AdminQuestions/>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});