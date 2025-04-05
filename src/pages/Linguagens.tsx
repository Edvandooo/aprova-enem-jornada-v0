
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoCard from '@/components/videos/VideoCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Linguagens = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const conteudos = [
    {
      categoria: "Gramática",
      videos: [
        {
          id: 'upS2vjFN0Pg',
          title: 'Análise Sintática - Sujeito e Predicado',
          thumbnail: 'https://i.ytimg.com/vi/upS2vjFN0Pg/hqdefault.jpg',
          duration: '21:38',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: '1YbE990Vy1g',
          title: 'Acentuação Gráfica - Regras Completas',
          thumbnail: 'https://i.ytimg.com/vi/1YbE990Vy1g/hqdefault.jpg',
          duration: '18:25',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: 'fen6m_eXJWs',
          title: 'Crase - Como Nunca Mais Errar',
          thumbnail: 'https://i.ytimg.com/vi/fen6m_eXJWs/hqdefault.jpg',
          duration: '15:42',
          subject: 'Linguagens',
          progress: 0,
        },
      ]
    },
    {
      categoria: "Literatura",
      videos: [
        {
          id: 'LMtoWTq2bMk',
          title: 'Modernismo Brasileiro - Primeira Fase',
          thumbnail: 'https://i.ytimg.com/vi/LMtoWTq2bMk/hqdefault.jpg',
          duration: '24:10',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: 'GwtR_HTt5mk',
          title: 'Realismo e Naturalismo',
          thumbnail: 'https://i.ytimg.com/vi/GwtR_HTt5mk/hqdefault.jpg',
          duration: '19:32',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: 'ItrMCwOVVFo',
          title: 'Machado de Assis e suas Obras',
          thumbnail: 'https://i.ytimg.com/vi/ItrMCwOVVFo/hqdefault.jpg',
          duration: '26:15',
          subject: 'Linguagens',
          progress: 0,
        },
      ]
    },
    {
      categoria: "Redação",
      videos: [
        {
          id: 'fU1VLACkvgQ',
          title: 'Introdução Perfeita para Redação Nota 1000',
          thumbnail: 'https://i.ytimg.com/vi/fU1VLACkvgQ/hqdefault.jpg',
          duration: '17:28',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: 'VjUNaWOfBb4',
          title: 'Desenvolvimento de Argumentos na Redação',
          thumbnail: 'https://i.ytimg.com/vi/VjUNaWOfBb4/hqdefault.jpg',
          duration: '22:43',
          subject: 'Linguagens',
          progress: 0,
        },
        {
          id: 'LTzWsJ9PW3w',
          title: 'Conclusão com Proposta de Intervenção',
          thumbnail: 'https://i.ytimg.com/vi/LTzWsJ9PW3w/hqdefault.jpg',
          duration: '19:54',
          subject: 'Linguagens',
          progress: 0,
        },
      ]
    },
  ];

  // Filtrar todos os vídeos de acordo com a busca
  const todosVideos = conteudos.flatMap(cat => cat.videos);
  const videosFiltered = todosVideos.filter(video => 
    !searchQuery || video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Linguagens</h1>
        
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
      
      {searchQuery ? (
        <div>
          <h2 className="text-lg font-semibold mb-4">Resultados da busca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videosFiltered.map((video) => (
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
          
          {videosFiltered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Nenhum vídeo encontrado</h3>
              <p className="text-muted-foreground mt-1">
                Tente mudar seus termos de busca
              </p>
            </div>
          )}
        </div>
      ) : (
        <Tabs defaultValue="Gramática" className="w-full">
          <TabsList className="mb-4">
            {conteudos.map(cat => (
              <TabsTrigger key={cat.categoria} value={cat.categoria}>{cat.categoria}</TabsTrigger>
            ))}
          </TabsList>
          
          {conteudos.map(cat => (
            <TabsContent key={cat.categoria} value={cat.categoria}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.videos.map((video) => (
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
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default Linguagens;
