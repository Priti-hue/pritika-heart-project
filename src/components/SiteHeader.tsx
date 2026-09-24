import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

const nav = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Research", "#research"],
  ["Beyond Work", "#beyond"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = (restore = false) => {
    setOpen(false);
    if (restore) requestAnimationFrame(() => openButton.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
      if (event.key === "Tab") {
        const panel = closeButton.current?.closest("div[data-menu-panel]");
        const focusable = panel?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => closeButton.current?.focus());
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const homeHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-md">
      <div className="site-container flex h-18 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Pritika Khatri</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, hash]) => <a key={hash} href={homeHref(hash)} className="nav-link">{label}</a>)}
          <Button asChild><Link to="/chatbot">Try the Chatbot</Link></Button>
        </nav>
        <Button ref={openButton} variant="icon" className="lg:hidden" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><Menu size={22} /></Button>
      </div>
      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50 bg-foreground/35 lg:hidden" onMouseDown={(event) => { if (event.target === event.currentTarget) close(true); }}>
          <div data-menu-panel id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-background p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <span className="font-display text-lg font-bold">Menu</span>
              <Button ref={closeButton} variant="icon" aria-label="Close menu" onClick={() => close(true)}><X size={22} /></Button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
              {nav.map(([label, hash]) => <a key={hash} href={homeHref(hash)} className="mobile-nav-link" onClick={() => close()}>{label}</a>)}
              <Button asChild className="mt-5 w-full"><Link to="/chatbot" onClick={() => close()}>Try the Chatbot</Link></Button>
            </nav>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
