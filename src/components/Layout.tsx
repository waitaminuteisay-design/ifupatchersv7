import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">TwitchPatcher</h1>
            <nav className="flex gap-2">
              <Button
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                asChild
              >
                <Link to="/">Global</Link>
              </Button>
              <Button
                variant={location.pathname === '/downloads' ? 'default' : 'ghost'}
                asChild
              >
                <Link to="/downloads">Téléchargements</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}