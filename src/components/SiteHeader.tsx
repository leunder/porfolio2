import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const linkProps = {
    className: "font-pixel text-[10px] md:text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors",
    activeProps: { className: "text-primary" },
  };
  return (
    <header className="sticky top-0 z-40 border-b-4 border-primary bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="font-pixel text-xs md:text-sm text-primary">
          {"<LMS/>"}
        </Link>
        <nav className="flex items-center gap-4 md:gap-8">
          <Link to="/" {...linkProps}>{t("nav.home")}</Link>
          <Link to="/proyectos" {...linkProps}>{t("nav.projects")}</Link>
          <Link to="/docencia" {...linkProps}>{t("nav.teaching")}</Link>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-pixel text-[10px] md:text-xs uppercase border-2 border-primary px-2 py-1 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </div>
    </header>
  );
}