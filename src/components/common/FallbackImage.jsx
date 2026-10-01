import { useState } from "react";

// <img> that switches to a backup picture if the main file is missing.
// (Lets a page look right while the final photos are still being added.)
function FallbackImage({ src, fallback, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed && fallback ? fallback : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default FallbackImage;
