import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { PreviewProps } from 'sanity';

interface YoutubePreviewSelect {
  url?: string;
}

export default function YouTubePreview(
  props: PreviewProps & YoutubePreviewSelect,
) {
  const id = props.url ? getYouTubeID(props.url) : '';

  if (!id) {
    return <div>Missing or invalid URL</div>;
  }

  return <YouTube opts={{ width: '100%' }} videoId={id} />;
}
