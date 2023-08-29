/* eslint-disable semi */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright'); // Verifying that the text contains "Copyright"
  });

  it('does not display link when user is logged out within context', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('displays link when user is logged in within context', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(1);
  });
});