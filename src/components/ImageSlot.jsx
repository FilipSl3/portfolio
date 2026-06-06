export default function ImageSlot({
  src,
  alt = "",
  caption = "Drop an image",
  className = "",
  radius = 0,
  fit = "cover",
}) {
  const radiusStyle = radius ? { borderRadius: `${radius}px` } : undefined;

  if (src) {
    return (
      <img
        src={src}
        alt={alt || caption}
        loading="lazy"
        decoding="async"
        className={`block h-full w-full ${className}`}
        style={{ objectFit: fit, ...radiusStyle }}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-media ${className}`}
      style={radiusStyle}
      role="img"
      aria-label={caption}
    >
      {/* Subtle diagonal stripe texture (no external asset). */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--grid) 0, var(--grid) 1px, transparent 1px, transparent 11px)",
        }}
      />
      <span className="relative font-mono text-xs tracking-wide text-text-3">
        {caption}
      </span>
    </div>
  );
}
