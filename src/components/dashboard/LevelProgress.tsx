
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Sparkles } from 'lucide-react';

interface LevelProgressProps {
  currentLevel: number;
  currentXP: number;
  xpForNextLevel: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ currentLevel, currentXP, xpForNextLevel }) => {
  const progressPercentage = Math.min(100, Math.floor((currentXP / xpForNextLevel) * 100));
  
  return (
    <div className="relative rounded-xl border bg-card overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-enem-primary to-enem-accent text-white font-bold">
            {currentLevel}
          </div>
          <div>
            <h4 className="font-medium">Nível {currentLevel}</h4>
            <div className="text-xs text-muted-foreground">Novato</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-sm">
            <Sparkles className="h-4 w-4 text-enem-secondary" />
            <span className="font-medium">{currentXP} XP</span>
          </div>
          <div className="text-xs text-muted-foreground">{xpForNextLevel - currentXP} XP para o próximo nível</div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progresso</span>
            <span>{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="progress-streak" />
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;
