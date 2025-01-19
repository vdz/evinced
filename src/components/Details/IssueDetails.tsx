'use client';

import { IssueDetailsProps } from "./types";
import { 
    CodeSnippet, 
    Description, 
    Screenshot, 
    Component, 
    Severity, 
    Selector, 
    Title, 
    Url,
    IssueDetailsWrapper,
    InfoList,
    CloseButton
} from "./IssueDetails.styled";
import Link from "next/link";
import { useIssuesStore } from "@/store/useIssuesStore";
import { useRouter } from "next/navigation";

export const IssueDetails: React.FC<IssueDetailsProps> = ({ id }) => {
    const router = useRouter();
    const { issuesById } = useIssuesStore();
    const issue = issuesById[id];

    if (!issue) {
        return <div>Issue not found</div>;
    }
    return (
        <IssueDetailsWrapper>
            <Severity role="status" aria-label="Issue severity">{issue.severity}</Severity>
            <Url href={issue.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit issue URL: ${issue.url}`}>
                {issue.url}
            </Url>
            <Title>{issue.issueType}</Title>
            <Description>{issue.description}</Description>
            <InfoList role="list">
                <dt>Component</dt>
                <dd><Component>{issue.component}</Component></dd>
                <dt>Selector</dt>
                <dd><Selector>{issue.selector}</Selector></dd>
                <dt>Code Snippet</dt>
                <dd><CodeSnippet>{issue.codeSnippet}</CodeSnippet></dd>
                <dt>Screenshot</dt>
                <dd><Screenshot src={issue.screenshot} alt={`Screenshot showing ${issue.issueType} issue at ${issue.url}`} /></dd>
            </InfoList>
            <Link href="/issues" aria-label="Return to issues list">Back to Issues</Link>
            <CloseButton onClick={() => {
                router.push('/issues');
            }} aria-label="Close issue details" 
               title="Close issue details" 
               tabIndex={0}>
                ×
            </CloseButton>
        </IssueDetailsWrapper>
    )
}

export default IssueDetails;