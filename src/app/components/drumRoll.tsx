import { utapi } from "~/server/uploadthing";
import TransitionImages from "./transitionImages";
import { cache } from "react";

const fetchImages = cache(async () => {
  const files = await utapi.listFiles();
  return files.files.map((file) => `https://utfs.io/f/${file.key}`);
});

export default async function DrumRoll() {
  const images = await fetchImages();
  return <TransitionImages images={images} />;
}
