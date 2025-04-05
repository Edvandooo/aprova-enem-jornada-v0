
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  return (
    <div className="space-y-3">
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {title && (
        <h2 className="text-xl font-bold">{title}</h2>
      )}
    </div>
  );
};

export default VideoPlayer;
