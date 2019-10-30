import React, { useMemo } from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { MockedProvider } from '@apollo/react-testing';
import { configure, mount } from 'enzyme';
import { UserContext } from '../../Context';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
  let wrapper, mockUser, mockStudent;

  beforeEach(() => {
    mockUser = {
      user: {
        name: 'Eric',
        role: 1,
        currentInterview: {
          id: 1
        }
      },
      setUser: jest.fn()
    }
    mockStudent = {
      firstName: 'Eric',
      lastName: 'O\'Neill'
    }
    wrapper = mount(
      <MemoryRouter>
        <MockedProvider addTypeName={false}>
          <UserContext.Provider value={mockUser}>
            <NavBar />
          </UserContext.Provider>
        </MockedProvider>
      </MemoryRouter>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});