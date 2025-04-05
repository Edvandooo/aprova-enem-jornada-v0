
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoCard from '@/components/videos/VideoCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Matematica = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const conteudos = [
    {
      categoria: "Aritmética",
      videos: [
        {
          id: 'EfLS_euI870',
          title: 'Porcentagem para o ENEM - Curso Completo',
          thumbnail: 'https://i.ytimg.com/vi/EfLS_euI870/hqdefault.jpg',
          duration: '35:32',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: 'qdMJf_r8w6s',
          title: 'Frações - Conceitos Básicos e Operações',
          thumbnail: 'https://i.ytimg.com/vi/qdMJf_r8w6s/hqdefault.jpg',
          duration: '28:45',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: 'LR8jQ_W8WY8',
          title: 'Regra de Três - Aprenda de uma Vez por Todas',
          thumbnail: 'https://i.ytimg.com/vi/LR8jQ_W8WY8/hqdefault.jpg',
          duration: '22:17',
          subject: 'Matemática',
          progress: 0,
        },
      ]
    },
    {
      categoria: "Álgebra",
      videos: [
        {
          id: 'cysLhDd5a0o',
          title: 'Equação do 1º Grau - Completo e Explicado',
          thumbnail: 'https://i.ytimg.com/vi/cysLhDd5a0o/hqdefault.jpg',
          duration: '19:43',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: 'vYd4LHIXHMc',
          title: 'Equação do 2º Grau - Aprenda a Resolver',
          thumbnail: 'https://i.ytimg.com/vi/vYd4LHIXHMc/hqdefault.jpg',
          duration: '24:12',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: 'zNvRrMQYbHs',
          title: 'Função Afim (1º Grau) - Tudo que Cai no ENEM',
          thumbnail: 'https://i.ytimg.com/vi/zNvRrMQYbHs/hqdefault.jpg',
          duration: '31:05',
          subject: 'Matemática',
          progress: 0,
        },
      ]
    },
    {
      categoria: "Geometria",
      videos: [
        {
          id: 'K3BGOrDa5j4',
          title: 'Áreas de Figuras Planas - Teoria e Exercícios',
          thumbnail: 'https://i.ytimg.com/vi/K3BGOrDa5j4/hqdefault.jpg',
          duration: '26:18',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: 'Bvf4TxcEcQ0',
          title: 'Teorema de Pitágoras - Aplicações',
          thumbnail: 'https://i.ytimg.com/vi/Bvf4TxcEcQ0/hqdefault.jpg',
          duration: '17:50',
          subject: 'Matemática',
          progress: 0,
        },
        {
          id: '8XnL9C4ew2Q',
          title: 'Trigonometria no Triângulo Retângulo',
          thumbnail: 'https://i.ytimg.com/vi/8XnL9C4ew2Q/hqdefault.jpg',
          duration: '22:31',
          subject: 'Matemática',
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
        <h1 className="text-2xl md:text-3xl font-bold">Matemática</h1>
        
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
        <Tabs defaultValue="Aritmética" className="w-full">
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

export default Matematica;
