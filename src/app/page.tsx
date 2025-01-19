'use client';

import data from "@/mocks/issues";
import { useIssuesStore } from "@/store/useIssuesStore";
import Link from "next/link";
import { useEffect } from "react";

export default function TableDisplayPage() {
  const setIssues = useIssuesStore(state => state.setIssues);
  
  useEffect(() => {
    setIssues(data);
  }, []);

  return (
      <Link href="/issues" aria-label="Navigate to issues list">Go to Issues</Link>
  );
}
