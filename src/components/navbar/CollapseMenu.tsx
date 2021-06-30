import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { Link } from 'react-router-dom';

const common = {
    duration: 0.8,
    ease: "expo.out"
};

const CollapseMenu = ({ handleNavbar, navbarState }: MenuProps) => {
    const tl = gsap.timeline();

    const sendClickEvent = () => {
        handleNavbar();
        updateMenu();
    };

    const updateMenu = () => {
        if (navbarState) {
            tl.to('.collapseWrapper', {
                ...common,
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
            });
        } else {
            tl.to('.collapseWrapper', {
                ...common,
                top: '-100%',
                left: 0,
                right: 0,
                height: '100%',
            });
        }
    };

    updateMenu();
    return (
        <CollapseWrapper className='collapseWrapper'>
            <NavLinks>
                <li>
                    <StyledLink to='/' onClick={sendClickEvent}>
                        Home
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/contact' onClick={sendClickEvent}>
                        Contact
                    </StyledLink>
                </li>
            </NavLinks>
        </CollapseWrapper>
    );
};

type MenuProps = {
    navbarState: boolean;
    handleNavbar: Function;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
    background-color: #ddd;
    position: fixed;
    display: flex;
    top: -100%;
    left: 0;
    right: 0;
    height: 100%;
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
    color: ${props => props.theme.colors.foreground};
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
        background: ${props => props.theme.colors.foreground};

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
