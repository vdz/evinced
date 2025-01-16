export interface Issue {
  id: number;
  issueType: string;
  severity: string;
  component: string;
  selector: string;
  url: string;
  description: string;
  codeSnippet: string;
  screenshot: string;
}

export interface ColumnConfig {
  key: string;
  label: string
}

export interface IssueTableProps<T> {
  data: T[];
  columns: ColumnConfig[];
  onRowClick?: (rowId: string) => void;
}

 