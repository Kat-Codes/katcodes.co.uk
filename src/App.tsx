import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from './theme/GlobalStyles';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { myTheme } from './theme/theme';
import Footer from './components/Footer';
import Header from './components/Header';

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
                    href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400&display=swap'
                    rel='stylesheet'></link>
            </Helmet>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <PageWrapper>
                    <Header />
                    <Content>
                        <Switch>
                            <Route exact path='/contact'>
                                <Contact />
                            </Route>
                            <Route path='*'>
                                <Home />
                            </Route>
                        </Switch>
                    </Content>
                    <Footer />
                </PageWrapper>
            </ThemeProvider>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    width: 100%;
`;

const Content = styled.main`
    margin: 0 auto;
    height: 100%;
    max-width: 1000px;
    width: 90%;
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export default App;
