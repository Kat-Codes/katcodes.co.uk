import React from 'react';
import styled from 'styled-components';

class Button extends React.Component<PropTypes> {
    render() {
        return (
            <StyledButton {...this.props}>{this.props.children}</StyledButton>
        );
    }
}

type PropTypes = {
    type?: any;
};

const StyledButton = styled.button`
    border: solid 2px ${props => props.theme.colors.foreground};
    display: inline-block;
    padding: 10px 20px;
    color: ${props => props.theme.colors.foreground};
    background: none;
    font-size: 16px;
    transition: all 0.2s ease;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.colors.foreground};
        color: ${props => props.theme.colors.background};
    }
`;

export default Button;
