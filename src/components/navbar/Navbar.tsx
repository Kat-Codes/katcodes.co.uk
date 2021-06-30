import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const Navbar = ({ navbarState, handleNavbar }: NavbarProps) => (
    <NavWrapper>
        <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        <NavBar>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        </NavBar>
    </NavWrapper>
);

type NavbarProps = {
    navbarState: boolean;
    handleNavbar: Function;
};

const NavWrapper = styled.div`
    z-index: 10;
`;

const NavBar = styled.nav`
    z-index: 10;
`;

export default Navbar;
