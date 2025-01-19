import styled from "styled-components";

export const BreadcrumbsWrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #3d2504;
    border-bottom: 1px solid #ccc;
    color: #cfaa84;
    font-weight: 700;

    & a:hover {
        color: #90cbe4;
        text-decoration: none;
    }
`;