
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgressData {
  name: string;
  completed: number;
  total: number;
}

interface ProgressOverviewProps {
  data: ProgressData[];
}

const ProgressOverview: React.FC<ProgressOverviewProps> = ({ data }) => {
  const formattedData = data.map(item => ({
    name: item.name,
    percentCompleted: Math.round((item.completed / item.total) * 100),
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const original = data.find(d => d.name === label);
      return (
        <div className="bg-card p-3 shadow-lg rounded-lg border">
          <p className="font-medium">{label}</p>
          <p className="text-muted-foreground">
            {original?.completed} de {original?.total} ({payload[0].value}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold">Visão Geral do Progresso</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.2} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="percentCompleted" fill="#4C2FFC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProgressOverview;
