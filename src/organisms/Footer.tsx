import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <StyledFooter>
        <Content>
            <Column title='Navigate'>
                <p>
                    <Link to='/'>Home</Link>
                </p>
                <p>
                    <Link to='/contact'>Contact</Link>
                </p>
            </Column>
            <Column title='Connect'>
                <p>
                    <a
                        href='https://github.com/kat-codes'
                        target='_blank'
                        rel='noopener noreferrer'>
                        GitHub
                    </a>
                </p>
                <p>
                    <a
                        href='https://twitter.com/katcodes'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Twitter
                    </a>
                </p>
                <p>
                    <a
                        href='https://www.linkedin.com/in/katcodes/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                </p>
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
    title: String;
    children: React.ReactNode
}

const StyledFooter = styled.footer`
    width: 100%;
    background: ${props => props.theme.colors.mid};
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

    h2 {
        font-size: 14px;
        padding: 10px 0;
        text-transform: uppercase;
    }

    p {
    color: ${props => props.theme.colors.foreground};
        font-size: 14px;
        text-decoration: underline;
    }

`;

export default Footer;
