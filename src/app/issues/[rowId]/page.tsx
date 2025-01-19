import { IssueDetails } from "@/components/Details/IssueDetails";

export interface IssuePageProps {
    params: {
        rowId: string;
    }
}

export const IssuePage: React.FC<IssuePageProps> = ({ params }) => {
    const id = params.rowId;
    return <IssueDetails id={id} />;
}

export default IssuePage;