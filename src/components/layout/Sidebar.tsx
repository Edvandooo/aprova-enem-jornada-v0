
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Home, BookOpen, Award, BarChart2, Users, Calendar, Settings, Calculator, Book, Beaker, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarLayoutProps {
  className?: string;
}

const AppSidebar: React.FC<SidebarLayoutProps> = ({ className }) => {
  const location = useLocation();
  
  const menuItems = [
    {
      icon: Home,
      label: 'Dashboard',
      path: '/',
    },
    {
      icon: BookOpen,
      label: 'Biblioteca',
      path: '/biblioteca',
    },
    {
      icon: Users,
      label: 'Comunidade',
      path: '/comunidade',
    },
    {
      icon: Award,
      label: 'Conquistas',
      path: '/conquistas',
    },
    {
      icon: BarChart2,
      label: 'Desempenho',
      path: '/desempenho',
    },
    {
      icon: Calendar,
      label: 'Missões',
      path: '/missoes',
    },
  ];

  const materias = [
    {
      icon: Calculator,
      label: 'Matemática',
      path: '/matematica',
    },
    {
      icon: Book,
      label: 'Linguagens',
      path: '/linguagens',
    },
    {
      icon: Beaker,
      label: 'C. Natureza',
      path: '/ciencias-natureza',
    },
    {
      icon: Globe,
      label: 'C. Humanas',
      path: '/ciencias-humanas',
    },
  ];

  return (
    <Sidebar className={cn('border-r border-sidebar-border', className)}>
      <div className="p-4 border-b border-sidebar-border flex items-center justify-center">
        <h2 className="text-xl font-bold text-sidebar-foreground flex items-center gap-2">
          <span className="text-enem-secondary">Rota</span> da Aprovação
        </h2>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className={cn(
                      "flex items-center gap-3",
                      location.pathname === item.path ? "text-enem-primary" : ""
                    )}>
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 mt-4">Matérias</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {materias.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className={cn(
                      "flex items-center gap-3",
                      location.pathname === item.path ? "text-enem-primary" : ""
                    )}>
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-4 border-t border-sidebar-border mt-auto">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-enem-primary flex items-center justify-center text-white font-bold">
            E
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Estudante ENEM</p>
            <p className="text-xs text-sidebar-foreground/70 truncate">Nível 1 • 0 XP</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
