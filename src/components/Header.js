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
            <Navbar navbarState={open} handleNavbar={handleNavbar} />
            {/* <h2>hello world!</h2> */}
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
