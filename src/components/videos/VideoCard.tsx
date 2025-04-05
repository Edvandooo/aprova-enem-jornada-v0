
import React from 'react';
import { Clock, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  subject: string;
  progress: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, thumbnail, duration, subject, progress }) => {
  return (
    <Link to={`/video/${id}`}>
      <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow">
        <div className="relative">
          <img src={thumbnail} alt={title} className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <div className="h-12 w-12 rounded-full bg-enem-primary/80 flex items-center justify-center">
              <Play className="h-6 w-6 text-white" fill="white" />
            </div>
          </div>
          {progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0">
              <Progress value={progress} className="h-1" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2 mb-2 group-hover:text-enem-primary">{title}</h3>
          <div className="flex items-center justify-between text-xs">
            <span className="px-2 py-0.5 bg-muted rounded-full">{subject}</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {duration}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
