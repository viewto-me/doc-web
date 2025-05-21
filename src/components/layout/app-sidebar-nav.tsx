
// src/components/layout/app-sidebar-nav.tsx
"use client";

import type { FC } from 'react';
import React, { useState, useMemo, useEffect, useCallback } from 'react'; // Added useEffect, useCallback
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { ChevronDown, ChevronRight } from 'lucide-react'; // Not used with Accordion's default icon
import type { DocPage } from '@/lib/documentation';
import { documentationTree } from '@/lib/documentation';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { 
  MagnifyingGlassIcon,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AppSidebarNavProps {
  onLinkClick?: () => void;
}

interface NavItemProps {
  page: DocPage;
  pathname: string;
  level: number;
  openSections: Record<string, boolean>; // Kept for logic, though Accordion controls UI open state
  // toggleSection: (id: string) => void; // Accordion handles its own open/close
  onLinkClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({ page, pathname, level, onLinkClick }) => {
  const isActivePath = pathname === page.path || pathname.startsWith(`${page.path}/`);
  // For AccordionTrigger, active style is applied if it's the current section or a parent of the current page.
  // Radix AccordionTrigger itself gets data-state="open" or data-state="closed".

  if (page.children && page.children.length > 0) {
    return (
      <AccordionItem value={page.id} className="border-none">
        <AccordionTrigger
          className={cn(
            "py-2 px-3 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full justify-between text-left group",
            // Apply active styling if this section is part of the active path
            // AND the accordion item itself is open OR it's a direct match page.path === pathname
            isActivePath && "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:text-primary-foreground"
          )}
          style={{ paddingLeft: `${0.75 + level * 0.75}rem` }}
        >
          {/* The ChevronDown icon is automatically added by AccordionTrigger */}
          <span className="flex-1 min-w-0 break-words mr-1">{page.title}</span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
           <ul className="space-y-1 pt-1 list-none">
            {page.children.map((child) => (
              <NavItem
                key={child.id}
                page={child}
                pathname={pathname}
                level={level + 1}
                openSections={{}} // Accordion controls its own open state
                onLinkClick={onLinkClick}
              />
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <li>
      <Link
        href={page.path}
        onClick={onLinkClick}
        className={cn(
          "block py-2 px-3 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          // For links, active style is applied if it's the exact current page
          pathname === page.path && "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:text-primary-foreground"
        )}
        style={{ paddingLeft: `${0.75 + level * 0.75}rem` }}
        aria-current={pathname === page.path ? 'page' : undefined}
      >
        <span className="break-words">{page.title}</span>
      </Link>
    </li>
  );
};


export const AppSidebarNav: FC<AppSidebarNavProps> = ({ onLinkClick }) => {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState('');
  // openSections now primarily drives the `value` prop of the Accordion for controlled state.
  const [openSections, setOpenSections] = useState<string[]>(() => {
    const initialOpenIds: string[] = [];
    function findAndOpenPath(pages: DocPage[], currentPath: string) {
      for (const page of pages) {
        if (page.children && currentPath.startsWith(page.path)) {
          if (!initialOpenIds.includes(page.id)) {
            initialOpenIds.push(page.id);
          }
          findAndOpenPath(page.children, currentPath); // Corrected: Call itself
        }
      }
    }
    findAndOpenPath(documentationTree, pathname);
    return initialOpenIds;
  });


  const filterPages = useCallback((pages: DocPage[], term: string): DocPage[] => {
    if (!term.trim()) return pages;
    const lowerCaseTerm = term.toLowerCase();

    return pages.reduce((acc: DocPage[], page) => {
      const matchTitle = page.title.toLowerCase().includes(lowerCaseTerm);
      const matchKeywords = page.keywords?.some(k => k.toLowerCase().includes(lowerCaseTerm));

      if (matchTitle || matchKeywords) {
        acc.push({ ...page, children: page.children ? filterPages(page.children, term) : [] });
      } else if (page.children) {
        const filteredChildren = filterPages(page.children, term);
        if (filteredChildren.length > 0) {
          acc.push({ ...page, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  }, [searchTerm]); // Added searchTerm to useCallback dependency array

  const filteredDocs = useMemo(() => filterPages(documentationTree, searchTerm), [filterPages, searchTerm]); // Added filterPages to useMemo dependency array
  
  // When search term changes, expand all items that contain search matches
  // or are parents of items that contain search matches
  useEffect(() => {
    if (searchTerm) {
      const newOpenIds: string[] = [];
      function collectMatchingParents(pages: DocPage[], term: string) {
        pages.forEach(page => {
          let hasMatchingChild = false;
          if (page.children) {
             const matchingChildren = filterPages(page.children, term);
             if (matchingChildren.length > 0 && matchingChildren.length < page.children.length) { // some children match
                hasMatchingChild = true;
             } else if (matchingChildren.length === page.children.length && filterPages([page],term).length === 0 ){ // all children match but parent doesn't
                // This case is tricky - if parent doesn't match but all children do because they contain the term,
                // we might still want to open the parent.
                // For simplicity, if any child interaction implies opening, we add parent.
             }
          }
          
          const selfMatches = page.title.toLowerCase().includes(term.toLowerCase()) || page.keywords?.some(k => k.toLowerCase().includes(term.toLowerCase()));

          if ((selfMatches || hasMatchingChild) && page.children && page.children.length > 0) {
            if (!newOpenIds.includes(page.id)) {
              newOpenIds.push(page.id);
            }
          }
           if (page.children) {
             collectMatchingParents(page.children, term); // recurse
           }
        });
      }
      collectMatchingParents(documentationTree, searchTerm);
      setOpenSections(prev => [...new Set([...prev, ...newOpenIds])]); // Add to existing, ensure unique
    }
  }, [filterPages, searchTerm]); // Added filterPages to useEffect dependency array


  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <Input
          id="ai-search" // Added ID for potential labeling/a11y
          type="search"
          placeholder="Pergunte a nossa AI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-background focus:bg-input pl-8" // Added pl-8 to make space for icon
          icon={
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              <path d="M24 4C18.9 4 14.14 5.67 10.56 8.44C6.98 11.22 4.68 15.04 3.96 19.38C3.24 23.72 4.14 28.2 6.56 31.84C9.06 35.4 12.92 37.8 17.32 39.1C21.72 40.4 26.44 40.44 30.8 39.48C35.16 38.52 39 36.44 41.84 33.56C44.68 30.68 46.44 26.98 47.12 22.9C47.8 18.82 47.38 14.6 45.92 10.72C44.46 6.84 41.98 3.52 38.8 1.56" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 18.8V22C24.44 22 24.88 22 25.32 22C25.76 22 26.2 22 26.64 22M24 18.8V15.6C24.44 15.6 24.88 15.6 25.32 15.6C25.76 15.6 26.2 15.6 26.64 15.6M26.64 22V25.2C27.08 25.2 27.52 25.2 27.96 25.2C28.4 25.2 28.84 25.2 29.28 25.2M26.64 22V18.8C27.08 18.8 27.52 18.8 27.96 18.8C28.4 18.8 28.84 18.8 29.28 18.8M29.28 25.2V28.4C29.72 28.4 30.16 28.4 30.6 28.4C31.04 28.4 31.48 28.4 31.92 28.4M29.28 25.2V22.8C29.72 22.8 30.16 22.8 30.6 22.8C31.04 22.8 31.48 22.8 31.92 22.8M31.92 28.4V31.6C32.36 31.6 32.8 31.6 33.24 31.6C33.68 31.6 34.12 31.6 34.56 31.6M31.92 28.4V25.6C32.36 25.6 32.8 25.6 33.24 25.6C33.68 25.6 34.12 25.6 34.56 25.6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.4 16.4C14.8 16.4 15.2 16.4 15.6 16.4M14.4 16.4C14 16.4 13.6 16.4 13.2 16.4M15.6 16.4V19.6C16 19.6 16.4 19.6 16.8 19.6C17.2 19.6 17.6 19.6 18 19.6M15.6 16.4V13.2C16 13.2 16.4 13.2 16.8 13.2C17.2 13.2 17.6 13.2 18 13.2M18 19.6V22.8C18.4 22.8 18.8 22.8 19.2 22.8C19.6 22.8 20 22.8 20.4 22.8M18 19.6V16.4C18.4 16.4 18.8 16.4 19.2 16.4C19.6 16.4 20 16.4 20.4 16.4M20.4 22.8V26C20.8 26 21.2 26 21.6 26C22 26 22.4 26 22.8 26M20.4 22.8V19.6C20.8 19.6 21.2 19.6 21.6 19.6C22 19.6 22.4 19.6 22.8 19.6M22.8 26V29.2C23.2 29.2 23.6 29.2 24 29.2C24.4 29.2 24.8 29.2 25.2 29.2" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          }
        />
      </div>
      <ScrollArea className="flex-grow">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections} // Directly set the open sections based on Accordion's state
          className="px-2 pt-2"> 
          <ul className="space-y-1 list-none pb-4"> {/* Added pb-4 here for spacing at the end of the list */}
            {filteredDocs.map((page) => (
              <NavItem
                key={page.id}
                page={page}
                pathname={pathname}
                level={0}
                openSections={{}} // Pass empty or simplified version as Accordion controls actual open state
                onLinkClick={onLinkClick}
              />
            ))}
          </ul>
        </Accordion>
      </ScrollArea>
    </div>
  );
};

