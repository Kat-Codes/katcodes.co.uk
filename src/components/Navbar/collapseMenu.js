import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if (props.navbarState === true) {
        return (
            <CollapseWrapper
                style={{
                    transform: open
                        .interpolate({
                            range: [0, 0.2, 0.3, 1],
                            output: [0, -20, 0, -1000],
                        })
                        .interpolate(
                            (openValue) => `translate3d(0, ${openValue}px, 0`
                        ),
                }}>
                <NavLinks>
                    <li>
                        <StyledLink to='/' onClick={props.handleNavbar}>
                            Home
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/contact' onClick={props.handleNavbar}>
                            Contact
                        </StyledLink>
                    </li>
                </NavLinks>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    /* z-index: 5; */
    background-color: #ddd;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;

    & li {
        transition: all 300ms linear 0s;
        position: relative;
        margin: 25px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 1.4rem;
    color: black;
    line-height: 1.5;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: black;

        transition: width 0.2s ease;
        -webkit-transition: width 0.2s ease;
    }

    &:hover {
        width: 100%;
        left: 0;
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }
`;
