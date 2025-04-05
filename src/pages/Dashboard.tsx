
import React from 'react';
import ProgressPieChart from '@/components/dashboard/ProgressPieChart';
import DailyMissions from '@/components/dashboard/DailyMissions';
import RecentVideos from '@/components/dashboard/RecentVideos';
import ProgressOverview from '@/components/dashboard/ProgressOverview';
import LevelProgress from '@/components/dashboard/LevelProgress';
import AchievementsBadges from '@/components/dashboard/AchievementsBadges';

const Dashboard = () => {
  // Sample data for the components - todos com valores zerados para um novo usuário
  const subjects = [
    { name: 'Linguagens', value: 0, color: '#4C2FFC' },
    { name: 'Matemática', value: 0, color: '#00C2FF' },
    { name: 'Ciências Humanas', value: 0, color: '#FF9500' },
    { name: 'Ciências da Natureza', value: 0, color: '#4CAF50' },
  ];

  const missions = [
    {
      id: '1',
      title: 'Assista 3 vídeos de Matemática',
      description: 'Complete esta missão para ganhar 50 XP',
      reward: 50,
      completed: false,
    },
    {
      id: '2',
      title: 'Complete um simulado de Ciências Humanas',
      description: 'Complete esta missão para ganhar 100 XP',
      reward: 100,
      completed: false,
    },
    {
      id: '3',
      title: 'Responda 10 questões sobre Literatura',
      description: 'Complete esta missão para ganhar 30 XP',
      reward: 30,
      completed: false,
    },
  ];

  const recentVideos = [
    {
      id: '1',
      title: 'Porcentagem - Matemática para o ENEM',
      subject: 'Matemática',
      thumbnail: 'https://i.ytimg.com/vi/EfLS_euI870/hqdefault.jpg',
      duration: '15:30',
      progress: 0,
    },
    {
      id: '2',
      title: 'Frações - Conceitos Básicos',
      subject: 'Matemática',
      thumbnail: 'https://i.ytimg.com/vi/qdMJf_r8w6s/hqdefault.jpg',
      duration: '23:45',
      progress: 0,
    },
    {
      id: '3',
      title: 'Regra de Três - Explicação Completa',
      subject: 'Matemática',
      thumbnail: 'https://i.ytimg.com/vi/LR8jQ_W8WY8/hqdefault.jpg',
      duration: '18:20',
      progress: 0,
    },
  ];

  const progressData = [
    { name: 'Linguagens', completed: 0, total: 100 },
    { name: 'Matemática', completed: 0, total: 100 },
    { name: 'C. Humanas', completed: 0, total: 100 },
    { name: 'C. Natureza', completed: 0, total: 100 },
  ];

  const achievements = [
    {
      id: '1',
      name: 'Primeira Aula',
      description: 'Assistiu à primeira videoaula completa',
      icon: '/placeholder.svg',
      unlocked: false,
    },
    {
      id: '2',
      name: 'Estudioso',
      description: 'Assistiu a 10 videoaulas completas',
      icon: '/placeholder.svg',
      unlocked: false,
    },
    {
      id: '3',
      name: 'Matemático',
      description: 'Completou 50% do conteúdo de Matemática',
      icon: '/placeholder.svg',
      unlocked: false,
    },
    {
      id: '4',
      name: 'Maratonista',
      description: 'Assistiu a 5 videoaulas em um único dia',
      icon: '/placeholder.svg',
      unlocked: false,
    },
    {
      id: '5',
      name: 'Mestre dos Simulados',
      description: 'Obteve nota acima de 700 em um simulado completo',
      icon: '/placeholder.svg',
      unlocked: false,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Portal do Aventureiro</h1>
      
      <LevelProgress currentLevel={1} currentXP={0} xpForNextLevel={1000} />
      
      <AchievementsBadges achievements={achievements} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProgressPieChart subjects={subjects} />
        </div>
        <div className="lg:col-span-1">
          <DailyMissions missions={missions} />
        </div>
        <div className="lg:col-span-1">
          <RecentVideos videos={recentVideos} />
        </div>
      </div>

      <div className="mt-6">
        <ProgressOverview data={progressData} />
      </div>
    </div>
  );
};

export default Dashboard;
