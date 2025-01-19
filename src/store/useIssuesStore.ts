import { Issue } from '@/components/Table/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IssuesState {
  issues: Issue[];
  issuesById: Record<string, Issue>;
  
  activeIssueId: string | null;

  setIssues: (issues: Issue[]) => void;
  setActiveIssue: (issueId: string | null) => void;
  getActiveIssue: () => Issue | null;
}

export const useIssuesStore = create(
    persist<IssuesState>((set, get) => ({
        issues: [],
        issuesById: {},
        activeIssueId: null,

        setIssues: (issues) => {
            const issuesById = issues.reduce((acc, issue) => {
            acc[issue.id.toString()] = issue;
            return acc;
            }, {} as Record<string, Issue>);
            set({
            issues,
            issuesById
            });
        },

        setActiveIssue: (issueId) => {
            set({ activeIssueId: issueId });
        },

        getActiveIssue: () => {
            const { activeIssueId, issuesById } = get();
            if (activeIssueId === null) return null;
            return issuesById[activeIssueId] || null;
        },
    }), {
        name: 'issues-storage'
    }
));