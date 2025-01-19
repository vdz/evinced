'use client';
import { IssueTable } from "@/components/Table/IssueTable";
import { useRouter } from "next/navigation";
import { useIssuesStore } from "@/store/useIssuesStore";

export default function TableDisplayPage() {
  const issues = useIssuesStore(state => state.issues);
  const router = useRouter();

  return (
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
                    filterable: true,
                  },
                    {
                    key: "url",
                    label: "URL",
                    filterable: true,
                  }]}
                  onRowClick={(payload) => {
                    router.push(`/issues/${payload}`);
                  }}
              />
  );
}
