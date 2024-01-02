import React from 'react';
import renderer from 'react-test-renderer';

import DriverActivityBar from '../DriverActivityBar';

it('renders correctly', () => {
    const tree = renderer.create(<DriverActivityBar />).toJSON();
    expect(tree).toMatchSnapshot();
});