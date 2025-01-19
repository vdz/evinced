'use client';

import { 
    ColumnFiltersState, 
    createColumnHelper, 
    flexRender, 
    getCoreRowModel, 
    getFilteredRowModel, 
    getSortedRowModel, 
    Header, 
    useReactTable, 
    DisplayColumnDef, 
    AccessorFnColumnDef 
} from "@tanstack/react-table";
import { Issue, IssueTableProps } from "./types";
import { useMemo, useState } from "react";
import { Table, TableHeader, TableRow, IssueTableWrapper, TableHeaderCell, SortControl, FilterControl, TableBody, TableCell } from "./IssueTable.styled";
import classNames from "classnames";
import { DebouncedInput } from "../Input/DebouncedInput";
import { useIssuesStore } from "@/store/useIssuesStore";

const columnHelper = createColumnHelper<Issue>();

export const IssueTable: React.FC<IssueTableProps<Issue>> = ({
    data,
    columns,
    onRowClick,
}) => {
    const columnConfig = useMemo(createColumnConfig, [columns]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const activeIssueId = useIssuesStore(state => state.activeIssueId);
    const setActiveIssue = useIssuesStore(state => state.setActiveIssue);

    const table = useReactTable({
        data: data,
        columns: columnConfig,
        state: {
            columnFilters
          },
        onColumnFiltersChange: setColumnFilters,
        enableRowSelection: true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(), //client side filtering
        getSortedRowModel: getSortedRowModel(),
    });
    
    return (
        <IssueTableWrapper>
            <Table role="grid" aria-label="Issues List">
                {getHeaderGroups()}
                {getRows()}
            </Table>
        </IssueTableWrapper>
    );



    function createColumnConfig() {
        const config: (DisplayColumnDef<Issue, unknown> | AccessorFnColumnDef<Issue, string | number>)[] = columns.map((column) => columnHelper.accessor((row) => row[column.key as keyof Issue], {
            id: column.key,
            header: column.label,
            enableColumnFilter: column.filterable ?? false,
        }));

        const rowNumber = columnHelper.display({
            id: 'rowNumber',
            header: 'No.',
            cell: info => info.row.index + 1,
            enableSorting: true,
            sortingFn: 'basic',
        });

        config.unshift(rowNumber);

        return config;
    }

    function getHeaderGroups() {
        return (
            <TableHeader role="rowgroup">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow role="row" key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            const isSorted = header.column.getIsSorted();
                            const id = header.column.id;
                            const classes = classNames({
                                [id]: id,
                                'active': isSorted,
                                'asc': isSorted === 'asc',
                                'desc': isSorted === 'desc',
                            })

                            return (
                                <TableHeaderCell 
                                    key={`header-cell-${header.id}`}
                                    className={classes}
                                    onClick={() => {
                                        header.column.toggleSorting();
                                    }
                                    }
                                    role="columnheader"
                                    aria-sort={isSorted ? (isSorted === 'asc' ? 'ascending' : 'descending') : 'none'}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            header.column.toggleSorting();
                                        }
                                    }}
                                    title={`Sort by ${header.column.columnDef.header}\nusing [space] or [enter]`}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {getSortControl(isSorted as string)}
                                    {getFilterControl(header)}
                                </TableHeaderCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
        )
    }

    function getSortControl(isSorted: string) {
        return (
            <SortControl>
                {
                    {
                        asc: '▲',
                        desc: '▼',
                    }[isSorted] ?? '↕'
                }
            </SortControl>
        )
    }

    function getFilterControl(header: Header<Issue, unknown>) {
        if (!header.column.getCanFilter()) return null;
        return (
            <FilterControl onClick={(e) => {
                e.stopPropagation();
            }}>
                <DebouncedInput
                    onChange={value => header.column.setFilterValue(value)}
                    type="text"
                    value={(header.column.getFilterValue() ?? '') as string}
                    aria-label={`Filter by ${header.column.columnDef.header}`}
                />
            </FilterControl>
        )
    }

    function getRows() {
        return (
            <TableBody role="rowgroup">
                {table.getRowModel().rows.map((row) => {
                    const isSelected = row.original.id.toString() === activeIssueId;
                    const classes = classNames({
                        'selected': isSelected,
                    })

                    return (
                        <TableRow 
                            key={row.id} 
                            className={classes} 
                            onClick={() => {
                                rowClick(row.original.id.toString());
                            }}
                            role="row"
                            aria-selected={isSelected}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    rowClick(row.original.id.toString());
                                }
                            }}
                        >
                            {row.getVisibleCells().map((cell) => {
                                const classes = classNames({
                                    [cell.column.id]: cell.column.id,
                                });

                                return (
                                    <TableCell 
                                        key={cell.id} 
                                        className={classes}
                                        role="gridcell"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        )
    }

    function rowClick(rowId: string) {
        if (onRowClick) {
            onRowClick(rowId);
        }
        setActiveIssue(rowId);
    }
};