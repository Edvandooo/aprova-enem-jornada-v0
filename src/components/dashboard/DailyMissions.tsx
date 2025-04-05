
import React from 'react';
import { CheckCircle, Circle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
}

interface DailyMissionsProps {
  missions: Mission[];
}

const DailyMissions: React.FC<DailyMissionsProps> = ({ missions }) => {
  const completedMissions = missions.filter((mission) => mission.completed).length;
  const progress = (completedMissions / missions.length) * 100;

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-bold">Missões Diárias</CardTitle>
            <CardDescription>Complete missões para ganhar XP</CardDescription>
          </div>
          <Trophy className="h-5 w-5 text-enem-secondary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progresso</span>
            <span className="font-medium">{completedMissions}/{missions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="space-y-3">
          {missions.map((mission) => (
            <div key={mission.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              {mission.completed ? (
                <CheckCircle className="h-5 w-5 text-enem-success flex-shrink-0 mt-0.5" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{mission.title}</h4>
                <p className="text-xs text-muted-foreground">{mission.description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs bg-enem-secondary/10 text-enem-secondary px-2 py-1 rounded-full">
                <Trophy className="h-3 w-3" />
                <span>{mission.reward} XP</span>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full bg-enem-secondary hover:bg-enem-secondary/90 text-white">
          Obter mais missões
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyMissions;
