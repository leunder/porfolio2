import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/proyectos")({
  component: ProyectosPage,
  head: () => ({
    meta: [
      { title: "Proyectos · Leandro M. Sánchez" },
      { name: "description", content: "Videojuegos indie desarrollados por Leandro M. Sánchez: SokoBandit, Brigadier, Bunny Adventure, Trajinante." },
    ],
  }),
});

type Project = {
  name: string;
  type: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  link?: string;
  emoji: string;
};

const projects: Project[] = [
  {
    name: "SokoBandit",
    emoji: "📦",
    type: { es: "Sokoban / Puzzle", en: "Sokoban / Puzzle" },
    description: {
      es: "Un juego de empujar cajas con estética pixel art y mecánicas clásicas de Sokoban con un toque bandido.",
      en: "A box-pushing puzzle game with pixel-art aesthetics and a bandit twist on classic Sokoban mechanics.",
    },
    tags: ["Puzzle", "Pixel Art", "Indie"],
    link: "https://vestigio.itch.io/",
  },
  {
    name: "Brigadier — Puentes del Federalismo",
    emoji: "⚔️",
    type: { es: "Estrategia histórica · Sidescroller", en: "Historical strategy · Sidescroller" },
    description: {
      es: "Juego de estrategia sidescrolling ambientado en el período federal argentino. Decisiones, batallas y diplomacia.",
      en: "Historical sidescrolling strategy game set in Argentina's federal era. Decisions, battles and diplomacy.",
    },
    tags: ["Strategy", "Historical", "Sidescroller"],
    link: "https://vestigio.itch.io/",
  },
  {
    name: "Bunny Adventure",
    emoji: "🐰",
    type: { es: "Plataformas", en: "Platformer" },
    description: {
      es: "Plataformero clásico protagonizado por un conejo valiente. Saltos precisos, enemigos y secretos.",
      en: "Classic platformer starring a brave bunny. Precise jumps, enemies and hidden secrets.",
    },
    tags: ["Platformer", "Arcade"],
    link: "https://vestigio.itch.io/",
  },
  {
    name: "Trajinante",
    emoji: "🧭",
    type: { es: "Aventura histórica · Point & Click", en: "Historical adventure · Point & Click" },
    description: {
      es: "Aventura point and click histórica: explorá rutas, personajes y costumbres de tiempos pasados.",
      en: "Historical point and click adventure: explore routes, characters and customs from past times.",
    },
    tags: ["Adventure", "Point & Click", "Historical"],
    link: "https://vestigio.itch.io/",
  },
];

function ProyectosPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl text-primary">{t("projects.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("projects.subtitle")}</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="pixel-card p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="text-5xl" aria-hidden>{p.emoji}</div>
                <span className="font-pixel text-[9px] uppercase text-accent">{p.type[lang]}</span>
              </div>
              <h2 className="text-lg md:text-xl text-primary">{p.name}</h2>
              <p className="text-base text-foreground">{p.description[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="font-pixel text-[9px] uppercase border-2 border-secondary px-2 py-1 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="pixel-btn self-start mt-2">
                  <ExternalLink className="h-4 w-4" /> {t("projects.play")}
                </a>
              )}
            </article>
          ))}
        </div>
      </main>
    </>
  );
}