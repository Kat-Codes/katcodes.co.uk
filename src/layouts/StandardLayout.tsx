import React, { ReactNode } from "react";
import Heading from "../atoms/Heading";

const StandardLayout = ({ title, children }: Props) => (
  <div>
    <Heading textAlign="center">{title}</Heading>
    <main>{children}</main>
  </div>
);

interface Props {
  title: string;
  children: ReactNode;
}

export default StandardLayout;
