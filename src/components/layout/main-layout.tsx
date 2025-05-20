// src/components/layout/main-layout.tsx
"use client";

import type { ReactNode } from 'react';
import { Navbar } from './navbar';
// import { Footer } from './footer'; // Removed Footer import
import { AppSidebarNav } from './app-sidebar-nav';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarInset,
  // useSidebar, 
} from '@/components/ui/sidebar'; 
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

// Renamed from LayoutContent as Footer is now separate
function MainContentAndNavbar({ children }: MainLayoutProps) {
  // const { setOpenMobile } = useSidebar(); // Example if needed by child components directly

  return (
    <div className="flex flex-1 flex-col min-h-0"> {/* This div is what SidebarInset applies margin to */}
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      {/* Footer removed from here */}
    </div>
  );
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      {/* This outer div manages the overall page structure: 
          A top section (sidebar + main content) and a bottom section (footer) */}
      <div className="flex flex-col min-h-screen">
        {/* This div is for the row containing the sidebar and the main content area */}
        <div className="flex flex-1"> 
          <Sidebar
            variant="sidebar"
            collapsible="icon"
            className="border-r border-border/40"
          >
            <SidebarContent className="p-0">
              <AppSidebarNav onLinkClick={() => {
                // const { setOpenMobile, isMobile } = useSidebar(); // Hook needs to be called at top level of component
                // if (isMobile) setOpenMobile(false); // Example: Close mobile sidebar on link click
                // This logic might be better placed inside AppSidebarNav or passed via props if context is complex
              }} />
            </SidebarContent>
          </Sidebar>
          <SidebarInset className={cn(
              "transition-[margin-left] duration-300 ease-in-out flex-1 flex flex-col", // Added flex-1 and flex flex-col for SidebarInset to fill space
            )}>
            {/* MainContentAndNavbar now only contains Navbar and the main page children */}
            <MainContentAndNavbar>{children}</MainContentAndNavbar>
          </SidebarInset>
        </div>
        {/* Footer component usage removed */}
      </div>
    </SidebarProvider>
  );
}
