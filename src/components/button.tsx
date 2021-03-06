import React from 'react';
import styled from 'styled-components';

type PropTypes = {
    type?: any;
};

class Button extends React.Component<PropTypes> {
    render() {
        return (
            <StyledButton {...this.props}>{this.props.children}</StyledButton>
        );
    }
}

const StyledButton = styled.button`
    border: solid 2px black;
    display: inline-block;
    padding: 10px 20px;
    color: black;
    background: none;
    font-size: 16px;
    transition: all 0.2s ease;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
`;

export default Button;
