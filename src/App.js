import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
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
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
            </PageWrapper>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const PageWrapper = styled.div`
    padding: 30px 0;
    min-height: 100vh;
    box-sizing: border-box;
    width: 90%;
    max-width: 1000px;
`;

export default App;
