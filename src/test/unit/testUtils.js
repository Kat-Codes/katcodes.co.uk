import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme/theme';

export const renderWith = (component) => {
    return renderer.create(
        <ThemeProvider theme={lightTheme}>
            <BrowserRouter>{component}</BrowserRouter>
        </ThemeProvider>).
        toJSON();
}