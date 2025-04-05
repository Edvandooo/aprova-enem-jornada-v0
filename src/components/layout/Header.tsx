
import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center px-6 border-b bg-card">
      <SidebarTrigger />
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell size={18} />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-enem-secondary text-xs">
            3
          </Badge>
        </Button>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-enem-primary to-enem-accent flex items-center justify-center text-white">
            E
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Estudante ENEM</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
