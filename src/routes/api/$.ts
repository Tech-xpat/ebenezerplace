import { createFileRoute } from "@tanstack/react-router";
import mediaHandler from "@/house/api/media.js";
import mediaItemHandler from "@/house/api/media/[id].js";
import giveHandler from "@/house/api/give.js";
import loginHandler from "@/house/api/admin/login.js";
import adminMediaHandler from "@/house/api/admin/media.js";
import adminMediaItemHandler from "@/house/api/admin/media/[id].js";
import passwordHandler from "@/house/api/admin/password.js";
import reorderHandler from "@/house/api/admin/reorder.js";
import uploadHandler from "@/house/api/admin/upload.js";
import thumbHandler from "@/house/api/admin/upload-thumbnail.js";
import usersHandler from "@/house/api/admin/users.js";
import youtubeHandler from "@/house/api/admin/youtube.js";

type VercelRes = {
  statusCode: number;
  body: unknown;
  headers: Record<string, string>;
  status: (code: number) => VercelRes;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: (data?: string) => void;
};

function createRes(): VercelRes & { done: Promise<Response> } {
  let resolve!: (r: Response) => void;
  const done = new Promise<Response>((r) => {
    resolve = r;
  });
  const headers: Record<string, string> = {};
  let statusCode = 200;
  let settled = false;
  const finish = (body: unknown) => {
    if (settled) return;
    settled = true;
    const payload = typeof body === "string" ? body : JSON.stringify(body ?? null);
    if (typeof body !== "string") headers["content-type"] = headers["content-type"] || "application/json";
    resolve(new Response(payload, { status: statusCode, headers }));
  };
  const res = {
    headers,
    get statusCode() {
      return statusCode;
    },
    set statusCode(code: number) {
      statusCode = code;
    },
    body: null as unknown,
    status(code: number) {
      statusCode = code;
      return res;
    },
    setHeader(name: string, value: string) {
      headers[name.toLowerCase()] = value;
    },
    json(data: unknown) {
      finish(data);
    },
    end(data?: string) {
      finish(data ?? "");
    },
  };
  return Object.assign(res, { done });
}

const routes: Record<string, (req: unknown, res: VercelRes) => Promise<void>> = {
  "media": mediaHandler,
  "media/:id": mediaItemHandler,
  "give": giveHandler,
  "admin/login": loginHandler,
  "admin/media": adminMediaHandler,
  "admin/media/:id": adminMediaItemHandler,
  "admin/password": passwordHandler,
  "admin/reorder": reorderHandler,
  "admin/upload": uploadHandler,
  "admin/upload-thumbnail": thumbHandler,
  "admin/users": usersHandler,
  "admin/youtube": youtubeHandler,
};

function matchRoute(splat: string) {
  if (routes[splat]) return { handler: routes[splat], id: "" };
  const parts = splat.split("/");
  if (parts.length === 2 && routes[`${parts[0]}/:id`]) return { handler: routes[`${parts[0]}/:id`], id: parts[1] };
  if (parts.length === 3 && routes[`${parts[0]}/${parts[1]}/:id`]) {
    return { handler: routes[`${parts[0]}/${parts[1]}/:id`], id: parts[2] };
  }
  return null;
}

async function dispatch(request: Request, splat: string) {
  const found = matchRoute(splat);
  if (!found) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  const url = new URL(request.url);
  const query: Record<string, string> = Object.fromEntries(url.searchParams.entries());
  if (found.id) query.id = found.id;
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });
  let body: Record<string, unknown> | undefined;
  let file: { buffer: Buffer; originalname: string; mimetype: string } | undefined;
  if (request.method !== "GET" && request.method !== "HEAD") {
    const ct = headers["content-type"] || "";
    if (ct.includes("application/json")) {
      body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    } else if (ct.includes("multipart/form-data")) {
      const form = await request.formData();
      body = {};
      for (const [key, value] of form.entries()) {
        if (value instanceof File) {
          const buf = Buffer.from(await value.arrayBuffer());
          file = { buffer: buf, originalname: value.name, mimetype: value.type };
        } else {
          body[key] = value;
        }
      }
    }
  }
  const req = { method: request.method, query, headers, body, file };
  const res = createRes();
  await found.handler(req, res);
  return await res.done;
}

export const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      GET: ({ request, params }) => dispatch(request, String(params._splat || "")),
      POST: ({ request, params }) => dispatch(request, String(params._splat || "")),
      PATCH: ({ request, params }) => dispatch(request, String(params._splat || "")),
      PUT: ({ request, params }) => dispatch(request, String(params._splat || "")),
      DELETE: ({ request, params }) => dispatch(request, String(params._splat || "")),
    },
  },
});
