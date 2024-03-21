import { Platform } from "./platform";

export const twitch: Platform = {
  id: "twitch",
  getChannelLink: (username: string) => `https://twitch.tv/${username}`,
  isLive: async (username: string) => {
    const response = await fetch(`https://twitch.tv/${username}`);
    const sourceCode = await response.text();

    return sourceCode.includes("isLiveBroadcast");
  },
};
