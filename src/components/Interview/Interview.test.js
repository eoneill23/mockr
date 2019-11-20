import React, { useMemo } from 'react';
import { render } from '@testing-library/react';
import Interview from './Interview';
import { MockedProvider } from '@apollo/react-testing';
import { configure, mount } from 'enzyme';
import { UserContext } from '../../Context';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Interview', () => {
  let wrapper, mockUser, mockStudent;

  beforeEach(() => {
    mockUser = {
      user: {
        name: 'Eric',
        role: 1,
        currentInterview: {
          id: 1,
          questions: [
            {id: 1, body: "Question 1"},
            {id: 2, body: "Question 2"},
            {id: 3, body: "Question 3"}
          ]
        }
      },
      setUser: jest.fn()
    }
    mockStudent = {
      firstName: 'Eric',
      lastName: 'O\'Neill'
    }
    wrapper = mount(
      <MockedProvider addTypeName={false}>
        <UserContext.Provider value={mockUser}>
          <Interview student={mockStudent} />
        </UserContext.Provider>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
