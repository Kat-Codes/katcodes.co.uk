import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';

const IconWrapper = ({ to, children, label }: WrapperProps) => (
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

type WrapperProps = {
    to: string;
    label: string;
    children: React.ReactElement;
};

const StyledWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const Icon = styled.svg`
    height: 50px;
    width: 50px;
    /* fill: black; */
    stroke: black;
    margin: 0;
    padding: 0 5px;
    transition: 200ms;

    ${StyledWrapper}:hover & {
        stroke: #aaa;
    }

    @media ${device.tablet} {
        margin-right: 10px;
    }
`;

export { Icon, IconWrapper };
