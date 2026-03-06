/**
 * Preloads image URLs by creating Image objects and setting their src.
 * The browser will cache them so when Next/Image or other components
 * request the same URL, it's already available.
 */
export function preloadImages(urls: string[]): Promise<void> {
  const unique = [...new Set(urls)];
  return Promise.allSettled(
    unique.map(
      (url) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block on failures
          img.src = url;
        }),
    ),
  ).then(() => undefined);
}
