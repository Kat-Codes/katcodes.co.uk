import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import { device } from './utils/breakpoints';

function App() {
    return (
        <AppWrapper>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Katie Walker, Software Engineer</title>
                <meta
                    name='description'
                    content='Katie Walker is a Nottingham, UK based Software Engineer, Public Speaker and Community Organiser.'
                />
                <meta name='keywords' content='Software Engineer, Nottingham' />
                <meta name='author' content='Katie Walker' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,700&display=swap'
                    rel='stylesheet'></link>
            </Helmet>
            <GlobalStyle />
            <PageWrapper>
                <Header />
                <TitleContainer>
                    <h2>
                        Good <Time />, I'm Katie
                    </h2>
                    <p>
                        I’m a UK based Software Engineer, working at Capital One
                        in a back-end services team.
                    </p>
                    <Button href='https://twitter.com/katcodes'>
                        Say hello
                    </Button>
                </TitleContainer>
            </PageWrapper>
        </AppWrapper>
    );
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

const StyledTime = styled.span`
    text-decoration: underline;
`;
const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const PageWrapper = styled.div`
    padding: 35px;
    min-height: 100vh;
    box-sizing: border-box;
    width: 90%;
    max-width: 1200px;
`;

const TitleContainer = styled.div`
    width: 100%;
    margin-top: 100px;

    > * {
        margin: 10px 0px;
    }

    @media ${device.tablet} {
        width: 50%;
    }
`;

const Button = styled.a`
    border: 2px solid black;
    padding: 15px;
    font-size: 16px;
    display: inline-block;
`;

export default App;
