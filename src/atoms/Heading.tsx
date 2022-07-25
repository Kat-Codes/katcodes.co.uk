import { ElementType } from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";

const StyledHeading = styled("h1")(
  variant({
    prop: "level",
    variants: {
      1: {
        fontSize: "24px",
      },
      2: {
        textTransform: "uppercase",
        fontSize: "18px",
      },
    },
  }),
  typography,
  space
);

const Heading = ({ level = "1", children, id, ...rest }: Props) => {
  const as = `h${level}` as ElementType;

  return (
    <StyledHeading as={as} level={level} id={id} {...rest}>
      {children}
    </StyledHeading>
  );
};

interface Props extends TypographyProps, SpaceProps {
  as?: React.ElementType;
  level?: string;
  children: React.ReactNode;
  id?: string;
}
export default Heading;
