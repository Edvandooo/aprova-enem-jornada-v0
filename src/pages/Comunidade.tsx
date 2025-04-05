
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquare, ThumbsUp, Share2, Users } from 'lucide-react';

const Comunidade = () => {
  const posts = [
    {
      id: '1',
      author: 'Ana Silva',
      avatar: '/placeholder.svg',
      authorInitials: 'AS',
      time: 'há 2 horas',
      content: 'Acabei de terminar de assistir a videoaula sobre porcentagem. Alguém tem dicas para resolver os exercícios mais difíceis?',
      likes: 5,
      comments: 2,
    },
    {
      id: '2',
      author: 'Carlos Oliveira',
      avatar: '/placeholder.svg',
      authorInitials: 'CO',
      time: 'há 5 horas',
      content: 'Pessoal, montei um grupo de estudos para Linguagens. Quem quiser participar, deixe seu comentário abaixo!',
      likes: 12,
      comments: 8,
    },
    {
      id: '3',
      author: 'Mariana Costa',
      avatar: '/placeholder.svg',
      authorInitials: 'MC',
      time: 'ontem',
      content: 'Compartilhando minha programação semanal de estudos para o ENEM. Estou dedicando 2 horas por dia, com foco em Matemática e Redação. Vocês têm alguma sugestão para melhorar?',
      likes: 15,
      comments: 7,
    },
  ];

  const grupos = [
    { nome: 'Matemática para o ENEM', membros: 156, avatar: '/placeholder.svg' },
    { nome: 'Redação Nota 1000', membros: 243, avatar: '/placeholder.svg' },
    { nome: 'Biologia e Química', membros: 98, avatar: '/placeholder.svg' },
    { nome: 'História e Geografia', membros: 124, avatar: '/placeholder.svg' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Comunidade de Estudantes</h1>
        <Button className="bg-enem-primary hover:bg-enem-primary/90">Criar nova publicação</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.authorInitials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{post.author}</CardTitle>
                    <CardDescription>{post.time}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
              <CardFooter className="border-t pt-3">
                <div className="flex items-center gap-4 text-sm w-full">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" /> {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" /> {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 ml-auto">
                    <Share2 className="h-4 w-4" /> Compartilhar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Grupos de Estudo</CardTitle>
              <CardDescription>Participe e aprenda em conjunto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {grupos.map((grupo, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={grupo.avatar} />
                      <AvatarFallback>{grupo.nome.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{grupo.nome}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3" /> {grupo.membros} membros
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Entrar</Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ver todos os grupos</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sugestões de Amizades</CardTitle>
              <CardDescription>Conecte-se com outros estudantes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {['Pedro Lima', 'Julia Santos', 'Rafael Moreira'].map((nome, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">{nome}</div>
                  </div>
                  <Button size="sm" variant="outline">Seguir</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Comunidade;
