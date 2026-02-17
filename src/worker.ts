import { Hono } from "hono";

type WorkerEnv = { ASSETS: Fetcher };

const app = new Hono<{ Bindings: WorkerEnv }>();

app.post("/api/contact", async (c) => {
  const body = await c.req.json<Record<string, string>>();

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return c.json({ error: "Name, email, subject, and message are required." }, 400);
  }

  const extraFields = Object.entries(body)
    .filter(([k]) => !["name", "email", "subject", "message"].includes(k))
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const fullMessage = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Inquiry: ${body["inquiry"] ?? ""}`,
    extraFields,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://formsubmit.co/ajax/geojimj@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
      message: fullMessage,
      _subject: `Contact form: ${subject}`,
      _replyto: email,
    }),
  });

  const result = ((await res.json()) as { success: string; message?: string });
  if (result.success !== "true") {
    return c.json({ error: "Failed to send message." }, 500);
  }

  return c.json({ success: true });
});

export default {
  async fetch(
    request: Request,
    env: WorkerEnv,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return app.fetch(request, env, ctx);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status === 404) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }
    return assetResponse;
  },
};
