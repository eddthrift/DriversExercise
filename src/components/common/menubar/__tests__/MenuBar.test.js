import React from 'react';
import renderer from 'react-test-renderer';

import MenuBar from '../MenuBar';
import { MemoryRouter } from 'react-router-dom';

it('renders correctly', () => {
    const tree = renderer.create(
    <MemoryRouter>
        <MenuBar />
    </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});