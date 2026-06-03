export interface Video {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
  description: string;
}

export const videos: Video[] = [];
