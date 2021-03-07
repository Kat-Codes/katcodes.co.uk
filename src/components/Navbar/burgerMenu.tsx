import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({navbarState, handleNavbar } : MenuProps) => {
    const sendClickEvent = () => {
        handleNavbar();
    };
    
    return (
        <Wrapper onClick={sendClickEvent}>
            <FlexWrapper className={navbarState ? 'open' : ''}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </FlexWrapper>
        </Wrapper>
    );
};

type MenuProps = {
    navbarState: boolean;
    handleNavbar: Function;
};

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30px;
`;

const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    display: block;

    & span {
        background: black;
        display: block;
        position: relative;
        width: 50px;
        height: 2px;
        transform: rotate(0deg);
        transition: all ease-in-out 0.2s;
    }

    .open span:nth-child(3) {
        transform: rotate(45deg);
        top: -14px;
    }

    .open span:nth-child(2) {
        width: 0;
    }

    .open span:nth-child(1) {
        transform: rotate(-45deg);
        top: 14px;
        left: 2px;
    }
`;

export default BurgerMenu;
