import React from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GlobalStyle from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/theme';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './organisms/Footer';
import Header from './organisms/Header';

class App extends React.Component<{}, { toggleState: boolean, theme: DefaultTheme }> {
    constructor(props: any) {
        super(props)

        const query = "(prefers-color-scheme: dark)";
        const localStorageKey = "colorScheme";

        const theme = window.localStorage.getItem(localStorageKey) || (window.matchMedia(query).matches ? "dark" : "light");

        this.state = { toggleState: theme === 'dark', theme: theme === 'light' ? lightTheme : darkTheme };
    }

    toggleTheme = (toggle: boolean) => {
        this.setState({ theme: toggle ? lightTheme : darkTheme })
    }

    render() {
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
                <ThemeProvider theme={this.state.theme}>
                    <GlobalStyle />
                    <PageWrapper>
                        <Header toggleTheme={this.toggleTheme} toggleState={this.state.toggleState} />
                        <Content>
                            <Router>
                                <Switch>
                                    <Route exact path='/contact'>
                                        <Contact />
                                    </Route>
                                    <Route path='*'>
                                        <Home />
                                    </Route>
                                </Switch>
                            </Router>
                        </Content>
                        <Footer />
                    </PageWrapper>
                </ThemeProvider>
            </AppWrapper>
        );
    }
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
