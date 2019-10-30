import React from 'react';
import { render } from '@testing-library/react';
import AdminSelectedStudentModal from './AdminSelectedStudentModal';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminSelectedStudentModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypeName={false}>
        <AdminSelectedStudentModal />
      </MockedProvider>
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});