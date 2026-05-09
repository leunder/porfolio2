import { createFileRoute } from "@tanstack/react-router";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" aria-hidden />
          <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-[float_4s_ease-in-out_infinite]">
            <img src={avatar} alt="Retrato" className="h-full w-full object-cover" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Mi Porfolio</h1>
      </section>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
    </main>
  );
}
