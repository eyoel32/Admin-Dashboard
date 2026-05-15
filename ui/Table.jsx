import React, { createContext, useContext } from "react";
import styled from "styled-components";

// Context to pass columns to rows and header
const TableContext = createContext();

// Main Table container
const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
`;

// Base row style for header and body
const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns || "1fr"};
  column-gap: 1.6rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

// Header row
const StyledHeader = styled(CommonRow)`
  padding: 1rem 1.6rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

// Body row
const StyledRow = styled(CommonRow)`
  padding: 0.8rem 1.6rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

// Table body wrapper
const StyledBody = styled.div`
  margin: 0.4rem 0;
`;

// Footer (optional)
const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

// Empty state
const EmptyMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
  color: var(--color-grey-400);
`;

// Table component
export function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

// Header component
export function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader $columns={columns}>{children}</StyledHeader>;
}

// Row component
export function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow $columns={columns}>{children}</StyledRow>;
}

// Body component with data mapping
export function Body({ data, render }) {
  if (!data || data.length === 0) return <EmptyMessage>No data to show</EmptyMessage>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

// Attach subcomponents to Table
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;