"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TransitionImages({ images }: { images: string[] }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes in the preference
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return; // Don't set up interval if reduced motion is preferred

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changed to 3000ms (3 seconds) for a more reasonable transition time
    return () => clearInterval(interval);
  }, [images.length, prefersReducedMotion]);

  return (
    <Image
      key={currentPhotoIndex}
      src={images[currentPhotoIndex]}
      alt={`Photo ${currentPhotoIndex + 1}`}
      className="aspect-video object-cover opacity-75"
      width={960}
      height={540}
      quality={80}
      priority
    />
  );
}
