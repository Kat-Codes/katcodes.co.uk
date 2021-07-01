import React from 'react';
import { Link } from 'react-router-dom';


const TextLink = ({ to, internal, children }: TextLinkProps) => (
    internal
        ? <Link role="link" tabIndex={0} to={to}>{children} </Link>
        : <a
            href={to}
            target='_blank'
            rel='noopener noreferrer'>
            {children}
        </a>
)

type TextLinkProps = {
    to: string;
    internal: boolean;
    children: React.ReactNode;
};

export default TextLink;