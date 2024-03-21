import { Platform } from "./platform";

export const youtube: Platform = {
  id: "youtube",
  getChannelLink: (username: string) =>
    `https://youtube.com/c/${username}/live`,
  isLive: async (username: string) => {
    const livePageResponse = await fetch(
      `https://www.youtube.com/c/${username}/live`
    );

    return livePageResponse.status === 200;
  },
};
