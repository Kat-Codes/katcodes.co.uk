import React from 'react';
import styled from 'styled-components';

const IconWrapper = ({ to, children, label }: WrapperProps) => (
    <StyledWrapper role="link" tabIndex={0}>
        <IconLink
            href={to}
            aria-label="link"
            target='_blank'
            rel='noopener noreferrer'>
            {children}
        </IconLink>
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

const IconLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
`;

const Icon = styled.svg`
    height: 50px;
    width: 50px;
    stroke: ${props => props.theme.colors.foreground};
    padding: 0 5px;
    transition: 200ms;

    ${StyledWrapper}:hover & {
        stroke: #aaa;
    }
`;

export { Icon, IconWrapper };
