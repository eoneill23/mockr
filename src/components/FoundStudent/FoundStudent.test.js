import React, { useMemo } from 'react';
import { render } from '@testing-library/react';
import FoundStudent from './FoundStudent';
import { MockedProvider } from '@apollo/react-testing';
import { configure, mount } from 'enzyme';
import { UserContext } from '../../Context';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FoundStudent', () => {
  let wrapper, mockUser, mockStudent;

  beforeEach(() => {
    mockUser = {
      user: {
        name: 'Eric',
        role: 1
      },
      setUser : jest.fn()
    }
    mockStudent = {
      firstName: 'Eric',
      lastName: 'O\'Neill'
    }
    wrapper = mount(
      <MockedProvider addTypeName={false}>
        <UserContext.Provider value={mockUser}>
          <FoundStudent student={mockStudent}/>
        </UserContext.Provider>
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});