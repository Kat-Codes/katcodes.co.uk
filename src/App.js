import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';

function App() {
    return (
        <div className='App'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Katie Walker</title>
                <link
                    href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,700&display=swap'
                    rel='stylesheet'></link>
            </Helmet>
            <GlobalStyle />
            <PageWrapper>
                <Header />
                <TitleContainer>
                    <h2>Good evening, I'm Katie</h2>
                    <p>
                        I’m a UK based Software Engineer, working at Capital One
                        as a back-end services engineer.
                    </p>
                    <Button href='https://twitter.com/katcodes'>
                        Say hello
                    </Button>
                </TitleContainer>
            </PageWrapper>
        </div>
    );
}

const PageWrapper = styled.div`
    min-height: 100vh;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;

const TitleContainer = styled.div`
    width: 50%;
    padding: 35px;
    min-width: 300px;
    margin-top: 100px;

    > * {
        margin: 10px 0px;
    }
`;

const Button = styled.a`
    border: 2px solid black;
    padding: 15px;
    font-size: 16px;
    display: inline-block;
`;

export default App;
