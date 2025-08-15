"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  dateISO?: string;      
  location?: string;
  videoSrc?: string;     
  posterSrc?: string;   
  onReserve?: () => void;
  onTeaser?: () => void;
};

export default function HeroHeader({
  title = "NEON FLOW 2025",
  subtitle = "L'expérience immersive qui fusionne lumière, musique et art interactif",
  dateISO = "2025-12-20T20:00:00",
  location = "Paris • Grand Hall",
  videoSrc = "/hero.mp4",
  posterSrc = "/hero.avif",
  onReserve,
  onTeaser,
}: Props) {
  const [jCount, setJCount] = useState<number | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  // J-XX (jours restants)
  useEffect(() => {
    const target = new Date(dateISO).setHours(0, 0, 0, 0);
    const tick = () => {
      const today = new Date().setHours(0, 0, 0, 0);
      const diffDays = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
      setJCount(diffDays);
    };
    tick();
    const id = setInterval(tick, 60_000); // maj chaque minute (suffisant)
    return () => clearInterval(id);
  }, [dateISO]);

  const dateFmt = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(dateISO));
    } catch {
      return dateISO;
    }
  }, [dateISO]);

  return (
    <header className="relative h-[100svh] w-full overflow-hidden">
      {/* Fond vidéo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      />
      <div
        ref={layerRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(18rem circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.06), transparent 60%)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Informations */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 text-white/80">
            <div className="text-sm sm:text-base">
              <span className="font-semibold">{dateFmt}</span>
              <span className="mx-2">•</span>
              <span>{location}</span>
            </div>
            {typeof jCount === "number" && (
              <div
                className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur"
                aria-live="polite"
              >
                <span className="font-mono">J‑{Math.max(0, jCount)}</span>
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span>Compte à rebours</span>
              </div>
            )}
          </div>

          {/* CTA placeholders */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onReserve}
              className="rounded-xl bg-fuchsia-500 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              Réserver maintenant
            </button>

            <button
              onClick={onTeaser}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm sm:text-base font-medium text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span>Voir le teaser</span>
              <svg
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
