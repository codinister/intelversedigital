'use client';

import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

interface YouTubeProps {
  value: {
    url: string;
  };
}

export default function YouTubeComponent({ value }: YouTubeProps) {
  const id = getYouTubeID(value?.url);

  if (!id) {
    return (
      <div className="rounded-md bg-red-100 p-4 text-red-600">
        Invalid YouTube URL
      </div>
    );
  }

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
      <YouTube
        videoId={id}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
        className="h-full w-full"
        iframeClassName="h-full w-full rounded-lg"
      />
    </div>
  );
}