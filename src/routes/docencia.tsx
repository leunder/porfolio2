import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/docencia")({
  component: DocenciaPage,
  head: () => ({
    meta: [
      { title: "Docencia · Leandro M. Sánchez" },
      { name: "description", content: "Trayectoria docente en programación y desarrollo de videojuegos." },
    ],
  }),
});

function DocenciaPage() {
  const { t } = useI18n();
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl md:text-4xl text-primary">{t("teaching.title")}</h1>
        <div className="mt-12 pixel-card p-10 flex flex-col items-center gap-6">
          <GraduationCap className="h-16 w-16 text-accent" />
          <p className="font-pixel text-[10px] md:text-xs uppercase text-muted-foreground">
            {t("teaching.empty")}
          </p>
          <p className="blink font-pixel text-[10px] text-primary">[ COMING SOON ]</p>
        </div>
      </main>
    </>
  );
}