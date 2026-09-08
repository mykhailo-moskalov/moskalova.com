import manifest from "./galleries.generated.json";
import type { GallerySet, Photo } from "@/lib/types/gallery";

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

export function photo(folder: string, index: number): Photo {
  const p = photosOf(folder)[index];
  if (!p) {
    throw new Error(
      `"${folder}" has ${photosOf(folder).length} photos, index ${index} does not exist`,
    );
  }
  return p;
}

type SetMeta = Pick<GallerySet, "title" | "subtitle">;

export function set(
  slug: string,
  folder: string,
  coverIndex: number,
  meta: SetMeta,
): GallerySet {
  const photos = photosOf(folder);
  return { slug, ...meta, cover: photo(folder, coverIndex), photos };
}
