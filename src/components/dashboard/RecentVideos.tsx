
import React from 'react';
import { Clock, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Video {
  id: string;
  title: string;
  subject: string;
  thumbnail: string;
  duration: string;
  progress: number;
}

interface RecentVideosProps {
  videos: Video[];
}

const RecentVideos: React.FC<RecentVideosProps> = ({ videos }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold">Vídeos Recentes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex gap-3">
            <div className="relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden group">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-5 w-5 text-white" />
              </div>
              <Progress value={video.progress} className="absolute bottom-0 left-0 right-0 h-1" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 bg-muted rounded-full">{video.subject}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentVideos;
