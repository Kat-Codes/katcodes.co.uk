import { Component } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import GlobalStyle from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";

interface State {
  toggleState: boolean;
  theme: DefaultTheme;
}

class App extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);

    let savedTheme = window.localStorage.getItem("theme");

    if (!savedTheme) {
      savedTheme = "light";
      window.localStorage.setItem("theme", "light");
    }

    this.state = {
      toggleState: savedTheme !== "light",
      theme: savedTheme === "light" ? lightTheme : darkTheme,
    };
  }

  toggleTheme = (toggle: boolean): void => {
    this.setState({ theme: toggle ? lightTheme : darkTheme });
    window.localStorage.setItem("theme", toggle ? "light" : "dark");
  };

  render(): JSX.Element {
    return (
      <AppWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Katie Walker, Software Engineer</title>
          <meta
            name="description"
            content="Katie Walker is a UK based Senior Full-stack Engineer, Public Speaker and Community Organiser."
          />
          <meta name="keywords" content="Senior Full-stack Engineer, UK" />
          <meta name="author" content="Katie Walker" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyle />
          <PageWrapper>
            <Router>
              <Header
                toggleTheme={this.toggleTheme}
                toggleState={this.state.toggleState}
              />
              <Content>
                <Switch>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="*">
                    <Home />
                  </Route>
                </Switch>
              </Content>
            </Router>
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
