import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import Title from '../components/Title';

class Home extends React.Component {
    render() {
        return (
            <TitleContainer>
                <Title id="homepage-title">
                    Good <Time />, I'm Katie
                </Title>
                <p>
                    I’m a UK based Software Engineer, working at Capital One in
                    a back-end services team.
                </p>
                <LinkButton to='/contact' data-qa-id="hello-btn">Say hello</LinkButton>
            </TitleContainer>
        );
    }
}

const Time = () => {
    let message;
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
        message = 'morning';
    } else if (hour < 18) {
        message = 'afternoon';
    } else {
        message = 'evening';
    }
    return <StyledTime>{message}</StyledTime>;
};

const LinkButton = styled(Link)`
    border: solid 2px black;
    display: inline-block;
    padding: 10px 20px;
    color: black;
    background: none;
    font-size: 16px;
    transition: all 0.2s ease;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
`;

const StyledTime = styled.span`
    text-decoration: underline;
`;

const TitleContainer = styled.div`
    width: 100%;

    > * {
        margin: 10px 0px;
    }

    @media ${device.tablet} {
        width: 50%;
    }
`;

export default Home;
