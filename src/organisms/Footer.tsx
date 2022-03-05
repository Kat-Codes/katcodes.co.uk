import styled from "styled-components";
import React from "react";
import TextLink from "../atoms/TextLink";

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Content>
      <Column title="Navigate">
        <TextLink to="/" internal>
          Home
        </TextLink>
        <TextLink to="/contact" internal>
          Contact
        </TextLink>
      </Column>
      <Column title="Connect">
        <TextLink to="https://github.com/kat-codes" internal={false}>
          GitHub
        </TextLink>
        <TextLink to="https://twitter.com/katcodes" internal={false}>
          Twitter
        </TextLink>
        <TextLink to="https://www.linkedin.com/in/katcodes/" internal={false}>
          LinkedIn
        </TextLink>
      </Column>
    </Content>
  </StyledFooter>
);

const Column = ({ title, children }: ColumnProps) => (
  <StyledColumn>
    <h2>{title}-</h2>
    {children}
  </StyledColumn>
);

type ColumnProps = {
  title: string;
  children: React.ReactNode;
};

const StyledFooter = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.colors.mid};
  padding: 30px 0;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 14px;
    padding: 10px 0;
    text-transform: uppercase;
  }
`;

export default Footer;
