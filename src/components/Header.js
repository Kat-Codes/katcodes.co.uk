import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import SocialLinks from './SocialLinks';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleNavbar = () => {
        setOpen(!open);
    };

    return (
        <StyledHeader>
            {/* <Navbar navbarState={open} handleNavbar={handleNavbar} /> */}
            {/* <h2>hello world!</h2> */}
            <SocialLinks />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    flex: 1;
    box-sizing: border-box;
    width: 100%;
    justify-content: end;
    align-items: center;
    display: flex;
`;

export default Header;
