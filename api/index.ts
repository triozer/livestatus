import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";
import { supportedPlatforms } from "./platform";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use("*", cors());

supportedPlatforms.forEach((platform) => {
  app.get(`/${platform.id}`, async (c) => {
    const user = c.req.query("username");

    if (!user) {
      return c.json({ error: "`username` query parameter is required" }, 400);
    }

    const link = platform.getChannelLink(user);
    const isLive = await platform.isLive(user);

    return c.json({ link, isLive });
  });
});

export default handle(app);
