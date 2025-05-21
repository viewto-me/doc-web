
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
          type="search"
          placeholder="Pesquisar na documentação..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-background focus:bg-input"
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

