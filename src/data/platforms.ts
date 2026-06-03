export interface Platform {
  id: string;
  name: string;
  description: string;
  url: string;
  image?: string;
}

export const platforms: Platform[] = [];
