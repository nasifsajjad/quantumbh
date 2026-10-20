export function socialMetadata(
  page: string,
  title: string,
  description: string,
) {
  const images = [
    { url: `/social/${page}.png`, width: 1200, height: 630, alt: title },
  ];
  return {
    openGraph: { title, description, images },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}
