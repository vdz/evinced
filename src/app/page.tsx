import { IssueTable } from "@/components/Table/IssueTable";
import { Issue } from "@/components/Table/types";
import data from "@/mocks/issues";
import { useState } from "react";

export default function TableDisplay() {
  const [issues, setIssues] = useState<Issue[]>(data);
  return (
    <>
      <IssueTable data={issues} 
      columns={[{
        key: "issueType",
        label: "Issue Type",
      },
        {
        key: "severity",
        label: "Severity",
      },
        {
        key: "component",
        label: "Component",
      },
        {
        key: "selector",
        label: "Selector",
      },
        {
        key: "url",
        label: "URL",
      }]} />
    </>
  );
}
