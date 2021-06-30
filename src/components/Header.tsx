import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import ToggleSwitch from './ToggleSwitch';
import SocialLinks from './SocialLinks';

const Header = (props: { toggleTheme: Function }) => {
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleNavbar = () => {
        setOpen(!open);
    };

    const toggleSwitch = () => {
        setToggle(!toggle);
        props.toggleTheme(toggle);
    }

    return (
        <StyledHeader>
            <Navbar navbarState={open} handleNavbar={handleNavbar} />
            <ToggleSwitch toggleState={toggle} toggleSwitch={toggleSwitch} />
            <SocialLinks />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    max-width: 1000px;
    padding: 30px 0;
    width: 90%;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin: 0 auto;
`;

export default Header;
