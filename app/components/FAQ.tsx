"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items?: FaqItem[];
};

const defaultItems: FaqItem[] = [
  {
    question: "Quel est l'âge minimum pour participer ?",
    answer:
      "L'événement est ouvert à partir de 16 ans, accompagné d’un adulte pour les mineurs.",
  },
  {
    question: "Puis-je me faire rembourser mon billet ?",
    answer:
      "Les billets ne sont pas remboursables, sauf annulation de l’événement.",
  },
  {
    question: "Y a-t-il un vestiaire sur place ?",
    answer:
      "Oui, un vestiaire sécurisé est disponible à l’entrée pour 2€ par article.",
  },
  {
    question: "Quels objets sont interdits ?",
    answer:
      "Sont interdits : armes, substances illicites, bouteilles en verre, grands sacs et tout objet dangereux.",
  },
];

export default function FAQ({ items = defaultItems }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
          FAQ
        </h2>

        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-panel-${i}`;
            return (
              <div key={i} className="px-6 py-4">
                <button
                  className="flex w-full items-center justify-between text-left text-white focus:outline-none"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-base font-medium">{item.question}</span>
                  <svg
                    className={`h-5 w-5 ${isOpen ? "rotate-180" : ""}`}
                    style={{ transition: "transform 0.2s" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    className="mt-2 text-white/80 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
