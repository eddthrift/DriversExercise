import React from 'react';
import renderer from 'react-test-renderer';

import DriverActivityHeaders from '../DriverActivityBar';

it('renders correctly', () => {
    const tree = renderer.create(<DriverActivityHeaders />).toJSON();
    expect(tree).toMatchSnapshot();
});