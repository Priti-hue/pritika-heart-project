import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { portfolio } from "../content/portfolio";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const close = () => {
    const previous = active;
    setActive(null);
    requestAnimationFrame(() => { if (previous !== null) triggerRefs.current[previous]?.focus(); });
  };
  const move = (amount: number) => setActive((current) => current === null ? 0 : (current + amount + portfolio.gallery.length) % portfolio.gallery.length);
  const activeImage = active === null ? undefined : portfolio.gallery[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => closeButton.current?.focus());
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {portfolio.gallery.map((image, index) => (
          <button key={image.src} ref={(el) => { triggerRefs.current[index] = el; }} className={`gallery-item gallery-item-${index + 1}`} onClick={() => setActive(index)} aria-label={`Open image ${index + 1} of ${portfolio.gallery.length}: ${image.alt}`}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      {active !== null && activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay p-4" role="dialog" aria-modal="true" aria-label={`Image ${active + 1} of ${portfolio.gallery.length}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="relative flex h-full w-full max-w-6xl items-center justify-center">
            <Button ref={closeButton} variant="lightIcon" className="absolute right-0 top-0 z-10" aria-label="Close image viewer" onClick={close}><X size={22} /></Button>
            <Button variant="lightIcon" className="absolute left-0 z-10" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft size={24} /></Button>
            <img className="max-h-[82vh] max-w-[calc(100%-6rem)] rounded-sm object-contain" src={activeImage.src} alt={activeImage.alt} />
            <Button variant="lightIcon" className="absolute right-0 z-10" aria-label="Next image" onClick={() => move(1)}><ChevronRight size={24} /></Button>
            <p className="absolute bottom-1 text-sm text-research-foreground">{active + 1} / {portfolio.gallery.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
