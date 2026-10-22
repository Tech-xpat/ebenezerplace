import type { MediaItem } from './media';

const now = '2026-10-22T00:00:00.000Z';

function photo(id: string, url: string, title: string, category: string, order: number): MediaItem {
  return {
    id,
    filename: id,
    originalName: title,
    url,
    type: 'image',
    category,
    source: 'upload',
    downloadable: false,
    status: 'published',
    title,
    order,
    createdAt: now,
  };
}

/** Shown until the admin publishes media from Supabase. */
const HOUSE_MEDIA: MediaItem[] = [
  photo('pastor', '/images/pastor.webp', 'Pastor Everest Chinakweze', 'leader', 0),
  photo('worship', '/images/worship.webp', 'Worship', 'gallery', 1),
  photo('honor', '/images/Honoring-God.webp', 'Honouring God', 'gallery', 2),
  photo('altar', '/images/anointing.webp', 'A moment in God\'s presence', 'gallery', 3),
  photo('ministry', '/images/anointing-portrait.webp', 'Ministry moment', 'gallery', 4),
  photo('discipleship', '/images/discipleship.webp', 'Discipleship', 'gallery', 5),
  photo('gathering', '/images/growth.webp', 'The gathering', 'gallery', 6),
  photo('wide', '/images/honoring-wide.webp', 'Hands lifted', 'gallery', 7),
  photo('sermon-rest', '/images/sermon-rest.webp', 'Rest on Every Side', 'gallery', 8),
  photo('sermon-word', '/images/sermon-word.webp', 'The Word', 'gallery', 9),
  photo('sermon-altar', '/images/sermon-altar.webp', 'Preaching', 'gallery', 10),
  photo('flyer', '/images/restoration-of-glory.webp', 'Restoration of Glory', 'gallery', 11),
];

/** Fetches published media. Falls back to the house photos when Supabase is not connected yet. */
export async function fetchPublishedMedia(category?: string): Promise<MediaItem[]> {
  const qs = category ? `?category=${encodeURIComponent(category)}` : '';
  try {
    const res = await fetch(`/api/media${qs}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch {
    /* house photos stand in until admin media is connected */
  }
  return category ? HOUSE_MEDIA.filter((item) => item.category === category) : HOUSE_MEDIA;
}
