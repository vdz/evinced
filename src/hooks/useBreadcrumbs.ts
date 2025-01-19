'use client';

import { usePathname } from 'next/navigation';

export function useBreadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(segment => segment.length > 0);

    const breadcrumbs = segments.map((segment, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);
        return { label, href };
    });
  
  return breadcrumbs;
}   