"use client";

type ProgramItem = {
    time: string;
    title: string;
    description: string;
    iconEmoji?: string;
};

type itemArray = {
    items: ProgramItem[];
};

export default function Program({ items }: itemArray) {
    return (
        <section className="relative w-full py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white"> Le programme </h2>
            </div>


            {/* Timeline MOBILE */}
            <div className="mt-8 md:hidden pl-5">
                <ol className="relative border-l border-white/15">
                    {items.map((it, idx) => (
                        <li key={idx} className="mb-8 ml-4">
                            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white/10">

                                {/* point de la timeline */}
                                <span className="h-2 w-2 rounded-full bg-white/40" />
                            </span>

                            <div className="flex items-start gap-3">
                                <div className="h-10 w-10 select-none rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-lg">
                                    {it.iconEmoji ?? "🎵"}
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-wide text-white/60">
                                        {it.time}
                                    </div>
                                    <div className="font-semibold text-white">{it.title}</div>
                                    <p className="text-white/80 text-sm">{it.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            {/* --- Desktop : timeline horizontale scrollable --- */}
            <div className="relative mt-8 hidden md:block">
                {/* masques de bord pour indiquer le scroll */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent" />

                <div
                    className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar pl-8.5"
                    role="list"
                    aria-label="Programme"
                >
                    {items.map((it, idx) => (
                        <article
                            key={idx}
                            role="listitem"
                            className="snap-start min-w-[260px] max-w-[280px] rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-xs uppercase tracking-wide text-white/70">
                                    {it.time}
                                </div>
                                <div className="h-10 w-10 select-none rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-lg">
                                    {it.iconEmoji ?? "🎵"}
                                </div>
                            </div>
                            <h3 className="mt-2 font-semibold text-white">{it.title}</h3>
                            <p className="mt-1 text-sm text-white/80 line-clamp-2">
                                {it.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>

        </section>


    )
}

