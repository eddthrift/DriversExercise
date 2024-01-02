import React from 'react';
import renderer from 'react-test-renderer';

import DriverActivityBox from '../DriverActivityBar';

it('renders correctly', () => {
    const tree = renderer.create(<DriverActivityBox />).toJSON();
    expect(tree).toMatchSnapshot();
});