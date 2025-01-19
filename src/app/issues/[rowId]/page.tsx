'use client';

import { IssueDetails } from "@/components/Details/IssueDetails";
import { useParams } from "next/navigation";

export default function Page() {
    const { rowId } = useParams();
    
    if (!rowId) {
        return <div>No rowId provided</div>;
    }
    
    return <IssueDetails id={rowId as string} />;
}