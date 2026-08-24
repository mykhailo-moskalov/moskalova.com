"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import type { Photo } from "@/lib/types/gallery";
import css from "./PhotoGrid.module.css";
import Reveal from "@/components/ui/Reveal/Reveal";

type PhotoGridProps = {
  photos: Photo[];
  label: string;
};

export default function PhotoGrid({ photos, label }: PhotoGridProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ul className={css.grid}>
        {photos.map((photo, i) => (
          <Reveal
            key={photo.src}
            as="li"
            index={i % 2}
            className={`${css.cell} ${
              photo.width > photo.height ? css.landscape : ""
            }`}
          >
            <button
              type="button"
              className={css.button}
              onClick={() => setIndex(i)}
              aria-label={`${label} — ${i + 1}/${photos.length}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt?.en ?? `${label} ${i + 1}`}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1440px) 600px, (min-width: 768px) 50vw, 100vw"
                className={css.img}
              />
            </button>
          </Reveal>
        ))}
      </ul>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          width: p.width,
          height: p.height,
          alt: p.alt?.en ?? label,
        }))}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 1, 0.95)" } }}
      />
    </>
  );
}
