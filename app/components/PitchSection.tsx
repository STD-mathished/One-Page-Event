"use client";

export default function PitchSection() {
  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="mx-auto w-full sm:w-4/5 lg:w-3/5 text-center">
          <p
            className="clamp-3 mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90"
          >
            Une expérience{" "}
            <span className="highlight">immersive</span> où la{" "}
            <span className="highlight">lumière</span>, la{" "}
            <span className="highlight">musique</span> et l’
            <span className="highlight">art interactif</span> s’unissent pour{" "}
            <span className="font-semibold text-white">réveiller vos sens</span>
            , <span className="font-semibold text-white">inspirer</span> vos
            idées et vous faire{" "}
            <span className="font-semibold text-white">vibrer</span>.
          </p>

        </div>
      </div>
    </section>
  );
}
