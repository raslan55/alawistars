import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage component — responsive, lazy-loaded images with blur-up effect
 * Usage:
 *   <LazyImage
 *     src="image.jpg"
 *     alt="description"
 *     placeholder="tiny-blurred-version.jpg"
 *     sizes="(max-width: 640px) 100vw, 50vw"
 *     className="w-full h-auto"
 *   />
 */
export default function LazyImage({
  src,
  alt = '',
  placeholder = null,
  sizes = null,
  srcSet = null,
  className = 'w-full h-auto',
  objectFit = 'cover',
  onLoad = null,
}) {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageRef) return;

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const srcToLoad = img.dataset.src;

            if (srcToLoad && srcToLoad !== imageSrc) {
              img.src = srcToLoad;
              if (img.dataset.srcset) {
                img.srcSet = img.dataset.srcset;
              }

              img.onload = () => {
                setImageSrc(srcToLoad);
                setIsLoaded(true);
                if (onLoad) onLoad();
                observer.unobserve(img);
              };

              img.onerror = () => {
                console.warn(`Failed to load image: ${srcToLoad}`);
                observer.unobserve(img);
              };
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) observer.unobserve(imageRef);
    };
  }, [imageRef, imageSrc, onLoad]);

  return (
    <img
      ref={setImageRef}
      data-src={src}
      data-srcset={srcSet || ''}
      src={imageSrc}
      alt={alt}
      sizes={sizes}
      className={`${className} transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-90'
      }`}
      style={{
        objectFit,
      }}
      loading="lazy"
    />
  );
}
