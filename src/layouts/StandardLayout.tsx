import React, { ReactNode } from "react";
import Heading from "../atoms/Heading";

const StandardLayout = ({ title, children }: Props) => (
  <div>
    <Heading level="2" as="h1" textAlign="center" pb="30px">
      {title}
    </Heading>
    <main>{children}</main>
  </div>
);

interface Props {
  title: string;
  children: ReactNode;
}

export default StandardLayout;
