export interface Platform {
  id: string;
  isLive: (username: string) => Promise<boolean>;
  getChannelLink: (username: string) => string;
}
