// src/components/layout/navbar.tsx
"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ViewToMeLogo } from '@/components/icons/viewtome-logo';
import { useSidebar } from '@/components/ui/sidebar';
import { SearchDialog } from '@/components/search/search-dialog';

export function Navbar() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        {/* Left Group: Toggle + Logo */}
        <div className="flex items-center">
          {isMobile && (
             <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          )}
          <Link href="/docs/introduction" className="flex items-center space-x-2" aria-label="viewto.me Docs Home">
            <ViewToMeLogo className="h-8 w-auto" />
          </Link>
        </div>

        {/* Center Group: Search Dialog (takes up available space and centers its content) */}
        <div className="flex-1 flex justify-center px-4">
          <SearchDialog />
        </div>

        {/* Right Group: Links */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="https://viewto.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Home
            </Link>
            <Link
              href="https://viewto.me/contato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
