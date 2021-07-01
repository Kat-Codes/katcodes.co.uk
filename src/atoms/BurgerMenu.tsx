import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const commonAnim = {
    duration: 0.1
};

const BurgerMenu = ({ navbarState, handleNavbar }: MenuProps) => {
    const tl = gsap.timeline();

    const sendClickEvent = () => {
        handleNavbar();
        updateMenu();
    };

    const updateMenu = () => {
        if (navbarState) {
            tl.to('.one', { ...commonAnim, rotation: 45, y: 14 })
                .to('.two', { ...commonAnim, width: 0, x: 25 }, 0)
                .to('.three', { ...commonAnim, rotation: -45, y: -14 }, 0);
        } else {
            tl.to('.one', { ...commonAnim, rotation: 0, y: 0 })
                .to('.two', { ...commonAnim, width: 50, x: 0 }, 0)
                .to('.three', { ...commonAnim, rotation: 0, y: 0 }, 0);
        }
    };

    updateMenu();

    return (
        <Wrapper onClick={sendClickEvent}>
            <FlexWrapper className={navbarState ? 'open' : ''}>
                <span className='one'>&nbsp;</span>
                <span className='two'>&nbsp;</span>
                <span className='three'>&nbsp;</span>
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
        background: ${props => props.theme.colors.foreground};
        display: block;
        position: relative;
        width: 50px;
        height: 2px;
        transform: rotate(0deg);
        transition: all ease-in-out 0.2s;
    }
`;

export default BurgerMenu;
