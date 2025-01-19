import styled from "styled-components";

export const IssueDetailsWrapper = styled.main`
    position: relative;
    font-family: var(--font-lato);
    margin: 1rem;
    background-color: #f0dbbd;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem 0;
`;

export const Severity = styled.span`
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    background-color: #333;
    color: #fff;
    width: fit-content;
    margin-right: 1rem;
`;

export const Component = styled.p`
    font-weight: 900;
`;

export const Selector = styled.code`
    font-family: var(--font-geist-mono);
`;

export const Url = styled.a`
    text-decoration: underline;
    color: blue;
    &::after {
        position: absolute;
        content: " ↗";
        font-size: 10px;
        margin-left: 0.2rem;
        margin-top: 0.3rem;
    }
`;

export const Description = styled.p`
    display: inline-block;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.3rem 1rem;
    background-color: #ffffff;
`;

export const CodeSnippet = styled.pre`
    font-family: var(--font-geist-mono);
`;

export const Screenshot = styled.img`
    min-width: 100%;
    aspect-ratio: 4/3;
    background-color: #fff;
    height: auto;
`;

export const CloseButton = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: #fff;

    &:hover {
        color: #333;
    }
`;

export const InfoList = styled.dl`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    dt {
        font-weight: bold;
        font-size: 0.8rem;
        color: #825617;
    }

    dd {
        border-bottom: 1px solid #ffffff;
        padding-bottom: 1rem;

        &:last-child {
            border-bottom: none;
        }
    }
`;