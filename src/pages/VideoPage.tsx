import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from '@/components/videos/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, List, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data para o vídeo de Porcentagem
  const video = {
    id: id || '1',
    title: 'Porcentagem para o ENEM - Curso Completo',
    description: 'Nesta aula completa, você aprenderá todos os detalhes sobre Porcentagem, um conteúdo fundamental para o ENEM. Vamos abordar cálculos, técnicas e estratégias para resolver problemas envolvendo porcentagens.',
    youtubeId: id || 'EfLS_euI870',
    views: 1420,
    likes: 325,
    subject: 'Matemática',
    topic: 'Porcentagem',
    instructor: 'Prof. Sandro Silva',
    relatedVideos: [
      {
        id: 'qdMJf_r8w6s',
        title: 'Frações - Conceitos Básicos e Operações',
        thumbnail: 'https://i.ytimg.com/vi/qdMJf_r8w6s/hqdefault.jpg',
        duration: '28:45',
      },
      {
        id: 'LR8jQ_W8WY8',
        title: 'Regra de Três - Aprenda de uma Vez por Todas',
        thumbnail: 'https://i.ytimg.com/vi/LR8jQ_W8WY8/hqdefault.jpg',
        duration: '22:17',
      },
    ],
  };

  useEffect(() => {
    console.log(`Video ${id} loaded`);
  }, [id]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/biblioteca">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl md:text-2xl font-bold line-clamp-1">{video.title}</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <VideoPlayer videoId={video.youtubeId} title={video.title} />
          
          <div className="bg-card rounded-lg p-4 border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">{video.title}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{video.views} visualizações</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{video.likes}</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <Bookmark className="h-4 w-4" />
                <span>Salvar</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>Comentários</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                <span>Compartilhar</span>
              </Button>
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{video.instructor}</span>
                <span className="text-xs px-2 py-0.5 bg-enem-primary/10 text-enem-primary rounded-full">
                  {video.subject}
                </span>
                <span className="text-xs px-2 py-0.5 bg-muted rounded-full">
                  {video.topic}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <List className="h-4 w-4" />
              Vídeos Relacionados
            </h3>
          </div>
          
          {video.relatedVideos.map((relatedVideo) => (
            <Link key={relatedVideo.id} to={`/video/${relatedVideo.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex gap-3">
                  <div className="relative flex-shrink-0 w-24 h-16">
                    <img src={relatedVideo.thumbnail} alt={relatedVideo.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-2 flex-1">
                    <h4 className="font-medium text-sm line-clamp-2">{relatedVideo.title}</h4>
                    <div className="mt-1 text-xs text-muted-foreground">{relatedVideo.duration}</div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
