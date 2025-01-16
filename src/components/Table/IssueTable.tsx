import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Issue, IssueTableProps } from "./types";

const columnHelper = createColumnHelper<Issue>();

export const IssueTable: React.FC<IssueTableProps<Issue>> = ({
    data,
    columns,
    onRowClick,
}) => {
    const columnConfig = createColumnConfig();
    
    return (
        <IssueTableWrapper>

        </IssueTableWrapper>
    );

    function createColumnConfig() {
        return columns.map((column) => columnHelper.accessor((row) => row[column.key as keyof Issue], {
            header: column.label,
            meta : {
                filterVariant: column.filterType
            }
        }));
    }
};
