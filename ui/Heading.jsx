import styled, { css } from "styled-components";

function normalizeAs(as) {
  if (typeof as !== "string") return as;
  return as.toLowerCase();
}

const Heading = styled.h1`
  color: var(--color-grey-800);
  line-height: 1.4;

  ${(props) =>
    normalizeAs(props.as) === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    normalizeAs(props.as) === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    (normalizeAs(props.as) === "h3" || normalizeAs(props.as) === "h4") &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
`;
export default Heading;