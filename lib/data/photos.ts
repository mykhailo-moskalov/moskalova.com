import type { GallerySet, Photo } from "@/lib/types/gallery";
import manifest from "./galleries.generated.json";

export function photosOf(folder: string): Photo[] {
  const entries = (
    manifest as Record<
      string,
      { file: string; width: number; height: number }[]
    >
  )[folder];
  if (!entries) {
    throw new Error(`No scanned photos for "${folder}" — run npm run scan`);
  }
  return entries.map((e) => ({
    src: `/galleries/${folder}/${e.file}`,
    width: e.width,
    height: e.height,
  }));
}

export function set(
  slug: string,
  title: string,
  cover: Photo,
  photos: Photo[],
  extra?: Partial<GallerySet>,
): GallerySet {
  return { slug, title: { en: title }, cover, photos, ...extra };
}
