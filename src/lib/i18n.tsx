import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.teaching": { es: "Docencia", en: "Teaching" },
  "hero.role": { es: "Profesor de Programación · Indie Game Dev", en: "Programming Teacher · Indie Game Dev" },
  "hero.bio": {
    es: "Docente y desarrollador de videojuegos con más de 8 años de experiencia. Apasionado por la programación, la educación y los juegos indie.",
    en: "Teacher and videogame developer with over 8 years of experience. Passionate about programming, education and indie games.",
  },
  "hero.location": { es: "Rafaela, Santa Fe — Argentina", en: "Rafaela, Santa Fe — Argentina" },
  "hero.cta.projects": { es: "Ver proyectos", en: "View projects" },
  "hero.cta.contact": { es: "Contactar", en: "Contact" },
  "projects.title": { es: "Proyectos / Juegos", en: "Projects / Games" },
  "projects.subtitle": { es: "Una selección de mis videojuegos indie.", en: "A selection of my indie games." },
  "projects.play": { es: "Jugar / Ver", en: "Play / View" },
  "teaching.title": { es: "Docencia", en: "Teaching" },
  "teaching.empty": { es: "Próximamente: instituciones, materias y trayectoria docente.", en: "Coming soon: institutions, courses and teaching experience." },
  "footer.built": { es: "Hecho con pixeles y café.", en: "Made with pixels and coffee." },
} satisfies Dict;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof dict) => dict[k][lang];
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}