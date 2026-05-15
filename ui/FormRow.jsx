import styled, { css } from "styled-components";
import { Children, isValidElement } from "react";

const Label = styled.label`
  font-weight: 500;
  color: var(--color-grey-700);
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const StyledFormRow = styled.div`
  gap: 2.4rem;
  padding: 1.2rem 0;

  ${(props) =>
    props.$mode === "horizontal" &&
    css`
      display: grid;
      grid-template-columns: 24rem 1fr 1.2fr;
      align-items: center;
    `}

  ${(props) =>
    props.$mode === "vertical" &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      align-items: stretch;
      gap: 0.8rem 2.4rem;
    `}

  ${(props) =>
    props.$mode === "actions" &&
    css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.2rem;
    `}
`;

function firstChildId(children) {
  const arr = Children.toArray(children).filter(isValidElement);
  return arr[0]?.props?.id;
}

function FormRow({ label, error, children, orientation = "horizontal" }) {
  const hasLabel = Boolean(label);
  const mode = !hasLabel
    ? "actions"
    : orientation === "vertical"
      ? "vertical"
      : "horizontal";

  return (
    <StyledFormRow $mode={mode}>
      {hasLabel && <Label htmlFor={firstChildId(children)}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;