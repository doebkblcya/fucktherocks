import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 内容模型：与 docs/requirements.md 第 3 节、docs/tech-design.md 第 3 节一致

const genres = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/genres' }),
  schema: z.object({
    name_zh: z.string(),
    name_en: z.string(),
    aliases: z.array(z.string()).default([]),
    summary: z.string(),
    origin_decade: z.string().optional(), // "1980s"
    origin_place: z.string().optional(),
    parent_genres: z.array(z.string()).default([]), // 多父，网状
    fusion_sources: z.array(z.string()).default([]), // 融合来源
    representative_artists: z.array(z.string()).default([]),
    representative_albums: z.array(z.string()).default([]),
  }),
});

const artists = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artists' }),
  schema: z.object({
    name_en: z.string(),
    name_zh: z.string().optional(),
    aka: z.array(z.string()).default([]),
    formed_year: z.number().optional(),
    disbanded_year: z.number().nullable().optional(),
    origin: z.string().optional(),
    members: z.array(z.string()).default([]),
    genres: z.array(z.string()).default([]), // 关联 Genre slug
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    artist: z.string(), // Artist slug
    release_year: z.number().optional(),
    label: z.string().optional(),
    genres: z.array(z.string()).default([]),
    milestone: z.boolean().default(false),
    tracks: z
      .array(
        z.object({
          title: z.string(),
          duration: z.number().nullable().optional(),
          position: z.number().optional(),
        })
      )
      .default([]),
  }),
});

const eras = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/eras' }),
  schema: z.object({
    decade: z.string(), // "1960s"
    title: z.string(),
    date: z.string().optional(),
    related_genres: z.array(z.string()).default([]),
    related_artists: z.array(z.string()).default([]),
    related_albums: z.array(z.string()).default([]),
  }),
});

export const collections = { genres, artists, albums, eras };
