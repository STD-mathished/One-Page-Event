"use client";

type AccessIcon = "metro" | "bus" | "car" | "walk" | "wheel";

type AccessItem = {
  icon: AccessIcon;
  label: string;
};

type Props = {
  title?: string;
  venueName?: string;
  address?: string;
  hours?: string;
  transports?: AccessItem[];
  parking?: string;
  accessibility?: string;
  mapImage: string; // image obligatoire
  mapHint?: string;
};

export default function Access({
  title = "Lieu & Accès",
  venueName = "Grand Hall",
  address = "12 Quai des Arts, 75011 Paris",
  hours = "Ouvert 18:30 → 00:30",
  transports = [
    { icon: "metro", label: "Métro L8 — Ledru-Rollin (5 min)" },
    { icon: "bus", label: "Bus 61 — arrêt Bastille (3 min)" },
    { icon: "walk", label: "À pied depuis Bastille (9 min)" },
  ],
  parking = "Parking Indigo Bastille (24/7), 400 m",
  accessibility = "Site accessible PMR, ascenseur et sanitaires adaptés",
  mapImage,
  mapHint = "Astuce : prévoyez d’arriver 15 minutes avant l’ouverture.",
}: Props) {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Colonne gauche */}
          <div className="space-y-6">
            <Block>
              <BlockTitle>{venueName}</BlockTitle>
              <p className="text-white/80">{address}</p>
              <p className="mt-1 text-white/70">{hours}</p>
            </Block>

            <Block>
              <BlockTitle>Transports</BlockTitle>
              <ul className="mt-2 space-y-2">
                {transports.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85">
                    <Icon type={t.icon} />
                    <span>{t.label}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block>
              <BlockTitle>Parking</BlockTitle>
              <p className="text-white/80">{parking}</p>
            </Block>

            <Block>
              <BlockTitle>Accessibilité</BlockTitle>
              <p className="flex items-start gap-3 text-white/80">
                <Icon type="wheel" />
                <span>{accessibility}</span>
              </p>
            </Block>
          </div>

          {/* Colonne droite : image stylisée */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3]">
              <img
                src={mapImage}
                alt="Plan d'accès"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-xs text-white/70 border-t border-white/10">
              {mapHint}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- composants utilitaires --- */
function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      {children}
    </div>
  );
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-white">{children}</h3>;
}

function Icon({ type }: { type: AccessIcon }) {
  const base = "h-5 w-5 mt-0.5 flex-none text-white/80";
  switch (type) {
    case "metro":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" opacity=".4" />
          <path d="M7 15h10V9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v6Z" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M8 15l-2 3M16 15l2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case "bus":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M5 10h14" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
        </svg>
      );
    case "car":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path d="M4 13l2-5a3 3 0 0 1 3-2h6a3 3 0 0 1 3 2l2 5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="13" width="18" height="5" rx="2" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="7.5" cy="18.5" r="1.2" fill="currentColor"/>
          <circle cx="16.5" cy="18.5" r="1.2" fill="currentColor"/>
        </svg>
      );
    case "walk":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="5" r="2" fill="currentColor"/>
          <path d="M12 7v4l-3 3m3-3l3 3m-4 0-1.5 5M14 14l2 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case "wheel":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="18" r="3" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M11 15V6a2 2 0 0 1 2-2h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M13 11h5l-2 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
  }
}
