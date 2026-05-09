import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import avatar from "@/assets/avatar.png";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail, Gamepad2, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Leandro M. Sánchez · Profesor & Indie Game Dev" },
      { name: "description", content: "Porfolio retro pixel art de Leandro M. Sánchez: docente de programación y desarrollador de videojuegos indie con más de 8 años de experiencia." },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 text-center md:py-24">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" aria-hidden />
          <div
            className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden border-4 border-primary"
            style={{ animation: "float 4s ease-in-out infinite", boxShadow: "8px 8px 0 0 var(--color-accent)", imageRendering: "pixelated" }}
          >
            <img src={avatar} alt="Leandro M. Sánchez" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-primary">
            Leandro M. Sánchez<span className="blink text-accent">_</span>
          </h1>
          <p className="font-pixel text-[10px] md:text-xs uppercase text-secondary">
            {t("hero.role")}
          </p>
          <p className="max-w-2xl text-lg md:text-xl text-foreground">
            {t("hero.bio")}
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {t("hero.location")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="https://github.com/leunder?tab=repositories" target="_blank" rel="noreferrer" className="pixel-btn">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/leandromesanchez/" target="_blank" rel="noreferrer" className="pixel-btn pixel-btn-secondary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://vestigio.itch.io/" target="_blank" rel="noreferrer" className="pixel-btn pixel-btn-accent">
            <Gamepad2 className="h-4 w-4" /> itch.io
          </a>
          <a href="mailto:leuhart@yahoo.com" className="pixel-btn">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/proyectos" className="pixel-btn pixel-btn-accent">{t("hero.cta.projects")}</Link>
          <a href="mailto:leuhart@yahoo.com" className="pixel-btn pixel-btn-secondary">{t("hero.cta.contact")}</a>
        </div>

        <footer className="mt-16 font-pixel text-[10px] uppercase text-muted-foreground">
          {t("footer.built")}
        </footer>
      </main>
    </>
  );
}
