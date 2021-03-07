import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import BurgerMenu from './burgerMenu';
import CollapseMenu from './collapseMenu';

const Navbar = ({ navbarState, handleNavbar }: NavbarProps) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, 0, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    return (
        <NavWrapper>
            <CollapseMenu
                navbarState={navbarState}
                handleNavbar={handleNavbar}
            />
            <NavBar style={barAnimation}>
                <BurgerMenu
                    navbarState={navbarState}
                    handleNavbar={handleNavbar}
                />
            </NavBar>
        </NavWrapper>
    );
};

type NavbarProps = {
    navbarState: boolean;
    handleNavbar: Function;
};

const NavWrapper = styled.div`
    z-index: 10;
`;

const NavBar = styled(animated.nav)`
    color: black;
    z-index: 10;
`;

export default Navbar;