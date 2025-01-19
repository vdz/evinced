'use client';

import Link from "next/link"
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { BreadcrumbsWrapper } from "./Breadcrums.styled";

export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <BreadcrumbsWrapper aria-label="breadcrumbs">
            <Link key="breadcrumb-home" href="/" 
                  aria-label="Navigate to home" 
                  title="Navigate to home">
                    Home
            </Link>
            {getBreadcrumbs()}
        </BreadcrumbsWrapper>
    )

    function getBreadcrumbs() {        
        return breadcrumbs.map((breadcrumb, index) => (
            <span key={`breadcrumb-${index}`}>
                <span> / </span>
                <Link href={breadcrumb.href} 
                      aria-label={`Navigate to ${breadcrumb.label}`} 
                      title={`Navigate to ${breadcrumb.label}`}>
                        {breadcrumb.label}
                </Link>
            </span>
        ))
    }
}