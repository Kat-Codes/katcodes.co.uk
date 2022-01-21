import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type TextLinkProps = {
  to: string;
  internal: boolean;
  children: React.ReactNode;
};
const TextLink: FunctionComponent<TextLinkProps> = ({
  to,
  internal,
  children,
}) =>
  internal ? (
    <Link role="link" tabIndex={0} to={to}>
      {children}{" "}
    </Link>
  ) : (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

export default TextLink;
