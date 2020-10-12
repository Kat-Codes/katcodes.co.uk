import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const Icon = styled.svg`
    height: 50px;
    width: 50px;
    /* fill: black; */
    stroke: black;
    padding-right: 10px;
    transition: 200ms;

    ${StyledWrapper}:hover & {
        stroke: #d4aad2;
    }
`;

const IconWrapper = ({ to, children, label }) => (
    <StyledWrapper>
        <a
            href={to}
            aria-label={label}
            target='_blank'
            rel='noopener noreferrer'>
            {children}
        </a>
    </StyledWrapper>
);

export { Icon, IconWrapper };
