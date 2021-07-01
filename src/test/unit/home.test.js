import Home from '../../pages/Home';
import React from 'react';
import { renderWith } from './testUtils';

describe('Home page', () => {
    test('should render the home page as expected', () => {
        const component = renderWith(<Home />)
        expect(component).toMatchSnapshot();
    });
});
