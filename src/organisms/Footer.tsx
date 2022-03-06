import styled from "styled-components";
import { ReactNode } from "react";
import TextLink from "../atoms/TextLink";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

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

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.colors.mid};
  padding: 30px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1000px;
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
