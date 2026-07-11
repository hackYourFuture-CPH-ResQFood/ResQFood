"use client";

import { useState } from "react";
import Image from "next/image";
import defaultFallbackImage from "./assets/heart.png";

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = defaultFallbackImage,
  onError,
  ...props
}) {
  const [failedSrc, setFailedSrc] = useState(null);

  const imageError = Boolean(src) && failedSrc === src;
  const isShowingFallback = imageError || !src;
  const imageSrc = isShowingFallback ? fallbackSrc : src;

  const handleError = (event) => {
    if (!isShowingFallback && src) {
      setFailedSrc(src);
    }

    onError?.(event);
  };

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={isShowingFallback ? "" : alt || "ResQFood"}
      onError={handleError}
    />
  );
}