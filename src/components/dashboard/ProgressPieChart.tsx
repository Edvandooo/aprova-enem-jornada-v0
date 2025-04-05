
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Subject {
  name: string;
  value: number;
  color: string;
}

interface ProgressPieChartProps {
  subjects: Subject[];
}

const ProgressPieChart: React.FC<ProgressPieChartProps> = ({ subjects }) => {
  const totalValue = subjects.reduce((acc, subject) => acc + subject.value, 0);
  const completionPercentage = Math.round((totalValue / (100 * subjects.length)) * 100);
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 shadow-lg rounded-lg border">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-muted-foreground">Progresso: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-bold mb-2">Pizza do Saber</h3>
      <div className="rounded-xl border bg-gradient-card p-4 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-full h-[240px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={subjects}
                  cx="50%"
                  cy="50%"
                  innerRadius="55%"
                  outerRadius="80%"
                  paddingAngle={3}
                  dataKey="value"
                >
                  {subjects.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-3xl font-bold text-white">{completionPercentage}%</span>
              <span className="text-sm text-white/70">concluído</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {subjects.map((subject) => (
            <div key={subject.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }}></div>
              <span className="text-xs text-white/90">{subject.name}: {subject.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPieChart;
