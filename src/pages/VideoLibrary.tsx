
import React, { useState } from 'react';
import SubjectFilter from '@/components/videos/SubjectFilter';
import VideoCard from '@/components/videos/VideoCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const VideoLibrary = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const subjects = [
    { id: 'linguagens', name: 'Linguagens', color: '#4C2FFC' },
    { id: 'matematica', name: 'Matemática', color: '#00C2FF' },
    { id: 'humanas', name: 'Ciências Humanas', color: '#FF9500' },
    { id: 'natureza', name: 'Ciências da Natureza', color: '#4CAF50' },
  ];

  const videos = [
    {
      id: '1',
      title: 'Funções do 1º Grau - Matemática para o ENEM',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      duration: '15:30',
      subject: 'Matemática',
      subjectId: 'matematica',
      progress: 75,
    },
    {
      id: '2',
      title: 'Interpretação de Texto - Dicas Essenciais',
      thumbnail: 'https://i.ytimg.com/vi/6Ejga4kJUts/hqdefault.jpg',
      duration: '23:45',
      subject: 'Linguagens',
      subjectId: 'linguagens',
      progress: 100,
    },
    {
      id: '3',
      title: 'Guerra Fria - História Mundial Contemporânea',
      thumbnail: 'https://i.ytimg.com/vi/BeyEGebJ1zI/hqdefault.jpg',
      duration: '18:20',
      subject: 'Ciências Humanas',
      subjectId: 'humanas',
      progress: 30,
    },
    {
      id: '4',
      title: 'Reações Químicas - Balanceamento e Tipos',
      thumbnail: 'https://i.ytimg.com/vi/JkBH7KmB5Qw/hqdefault.jpg',
      duration: '20:15',
      subject: 'Ciências da Natureza',
      subjectId: 'natureza',
      progress: 0,
    },
    {
      id: '5',
      title: 'Revolução Industrial - Causas e Consequências',
      thumbnail: 'https://i.ytimg.com/vi/qIWKd0p7vfs/hqdefault.jpg',
      duration: '17:40',
      subject: 'Ciências Humanas',
      subjectId: 'humanas',
      progress: 50,
    },
    {
      id: '6',
      title: 'Geometria Espacial - Prismas e Pirâmides',
      thumbnail: 'https://i.ytimg.com/vi/3wqeZCrK0wQ/hqdefault.jpg',
      duration: '22:10',
      subject: 'Matemática',
      subjectId: 'matematica',
      progress: 0,
    },
    {
      id: '7',
      title: 'Gêneros Textuais na Redação do ENEM',
      thumbnail: 'https://i.ytimg.com/vi/5hPfm_uqXfw/hqdefault.jpg',
      duration: '19:50',
      subject: 'Linguagens',
      subjectId: 'linguagens',
      progress: 15,
    },
    {
      id: '8',
      title: 'Ecologia - Ciclos Biogeoquímicos',
      thumbnail: 'https://i.ytimg.com/vi/kA5QhyDLQcQ/hqdefault.jpg',
      duration: '16:35',
      subject: 'Ciências da Natureza',
      subjectId: 'natureza',
      progress: 0,
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSubject = !selectedSubject || video.subjectId === selectedSubject;
    const matchesSearch = !searchQuery || video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Biblioteca do Conhecimento</h1>
        
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar vídeos..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <SubjectFilter
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSelectSubject={setSelectedSubject}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            duration={video.duration}
            subject={video.subject}
            progress={video.progress}
          />
        ))}
      </div>
      
      {filteredVideos.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">Nenhum vídeo encontrado</h3>
          <p className="text-muted-foreground mt-1">
            Tente mudar seus filtros ou termos de busca
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;
