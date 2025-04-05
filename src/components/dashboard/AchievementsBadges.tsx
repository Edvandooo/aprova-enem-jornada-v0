
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface AchievementsBadgesProps {
  achievements: Achievement[];
}

const AchievementsBadges: React.FC<AchievementsBadgesProps> = ({ achievements }) => {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h3 className="font-bold mb-3">Conquistas Desbloqueadas</h3>
      <div className="flex flex-wrap gap-3">
        <TooltipProvider>
          {achievements.map((achievement) => (
            <Tooltip key={achievement.id}>
              <TooltipTrigger asChild>
                <div 
                  className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-enem-primary to-enem-accent badge-glow' 
                      : 'bg-muted opacity-40'
                  }`}
                >
                  <img src={achievement.icon} alt={achievement.name} className="h-6 w-6" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-medium">{achievement.name}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default AchievementsBadges;
