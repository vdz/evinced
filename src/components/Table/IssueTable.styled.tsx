import styled from "styled-components";

export const IssueTableWrapper = styled.div`
    width: 100%;
    height: 100%;    
`;

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: var(--font-lato);
    border-collapse: collapse;
    border-spacing: 1;
    width: 100%;
`;

export const TableHeader = styled.thead`
    background-color: var(--accent-color);
    color: #fff;
    font-size: 12px;
    text-align: left;
    text-transform: uppercase;
    cursor: pointer;

    tr {
        border-bottom: 0px;
    }

`;

export const TableBody = styled.tbody``;

export const TableHeaderCell = styled.th`
    overflow: hidden;
    white-space: nowrap;
    padding-left: var(--table-spacer);
    padding-right: var(--table-spacer);
    height: 45px;
    line-height: 45px;
    border-right: 1px solid #fff;

    &:last {
        border-right: none;
    }

    input {
        display: inline;
        border-radius: var(--table-spacer);
        border: none;
        height: 35px;
        padding: 0 5px; 
        margin-left: var(--table-spacer);
        width: auto;
    }

    &.rowNumber {
        width: 60px;
    }

    &.active {
        background-color: var(--active-color);
    }
`;

export const TableRow = styled.tr`
    height: 45px;
    border-bottom: 1px solid var(--strong-color);
    cursor: pointer;

    &.selected {
        background-color: var(--active-color);
        color: #fff;
    }
`;

export const TableCell = styled.td`
    padding-left: var(--table-spacer);
    padding-right: var(--table-spacer);
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const SortControl = styled.span`
    cursor: pointer;
    display: inline;
    margin-left: 3px;
`;

export const FilterControl = styled.span`
    width: fit-content;
`;