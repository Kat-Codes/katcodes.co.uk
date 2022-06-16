import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const Home: FunctionComponent = () => (
  <TitleContainer>
    <Title id="homepage-title">
      Good <Time />, I'm Katie
    </Title>
    <p>I'm a UK based Software Engineer working at Spotify 🎵</p>
    <Link to="/contact">
      <Button data-qa-id="hello-btn">Say hello</Button>
    </Link>
  </TitleContainer>
);

const Time = () => {
  let message;
  const hour = new Date().getHours();

  if (hour < 12) {
    message = "morning";
  } else if (hour < 18) {
    message = "afternoon";
  } else {
    message = "evening";
  }
  return <StyledTime>{message}</StyledTime>;
};

const StyledTime = styled.span`
  text-decoration: underline;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 125px 0px;

  > * {
    margin: 16px 0px;
  }

  ${device.tablet} {
    width: 50%;
  }
`;

export default Home;
