"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import defaultFallbackImage from "./assets/heart.png";

export default function FallbackImage({
	src,
	alt,
	fallbackSrc = defaultFallbackImage,
	onError,
	...props
}) {
	const [imageError, setImageError] = useState(false);
	const isShowingFallback = imageError || !src;
	const imageSrc = isShowingFallback ? fallbackSrc : src;

	useEffect(() => {
		setImageError(false);
	}, [src]);

	const handleError = (event) => {
		if (!isShowingFallback) {
			setImageError(true);
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
