import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
    width: 100%;
    background: #ddd;
    /* border-top: solid black 2px; */
    padding: 30px 0;
`;

const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
    color: #333;
    display: flex;
    justify-content: space-evenly;
`;

const StyledColumn = styled.div`
    h5 {
        padding: 10px 0;
        text-transform: uppercase;
    }

    p {
        font-size: 14px;
        text-decoration: underline;
    }
`;

const Column = ({ title, children }) => (
    <StyledColumn>
        <h5>{title}-</h5>
        {children}
    </StyledColumn>
);

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

export default Footer;
