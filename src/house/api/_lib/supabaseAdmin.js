// @ts-nocheck
import { createClient } from '@supabase/supabase-js';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function hydrateEnv() {
  try {
    const file = resolve(process.cwd(), '.env');
    if (!existsSync(file)) return;
    for (const raw of readFileSync(file, 'utf8').split('\n')) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq < 1) continue;
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (key && process.env[key] == null) process.env[key] = val;
    }
  } catch {
    /* .env is optional until the keys are added */
  }
}

hydrateEnv();

export const MEDIA_BUCKET = 'media';

function envUrl() {
  return process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
}
function envKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || '';
}

let client = null;
function admin() {
  if (!envUrl() || !envKey()) {
    throw new Error('Supabase is not configured');
  }
  if (!client) {
    client = createClient(envUrl(), envKey(), { auth: { persistSession: false } });
  }
  return client;
}

export const supabaseAdmin = new Proxy(
  {},
  {
    get(_target, prop) {
      const real = admin();
      const value = real[prop];
      return typeof value === 'function' ? value.bind(real) : value;
    },
  },
);

export function mapMediaRow(row) {
  return {
    id: row.id,
    filename: row.filename,
    originalName: row.original_name,
    url: row.url,
    type: row.type,
    category: row.category,
    source: row.source,
    youtubeUrl: row.youtube_url ?? undefined,
    thumbnailUrl: row.thumbnail_url ?? undefined,
    downloadable: row.downloadable,
    status: row.status,
    title: row.title ?? undefined,
    description: row.description ?? undefined,
    order: row.order,
    sermonDate: row.sermon_date ?? undefined,
    createdAt: row.created_at,
    storagePath: row.storage_path ?? undefined,
  };
}

export function extractYoutubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = url?.match(p);
    if (m) return m[1];
  }
  return null;
}
