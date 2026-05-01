import { copy } from "@/lib/copy";
import { XCircle, Sparkles } from "lucide-react";

export default function Story() {
  const { story } = copy;
  return (
    <section className="relative bg-[var(--color-ink)] text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[var(--color-brand)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {story.headlinePre}{" "}
          <span className="text-red-400">{story.headlineHighlight}</span>{" "}
          {story.headlinePost}
        </h2>
        <p className="mt-6 text-center text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {story.intro}
        </p>

        <div className="mt-14 bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 md:p-10">
          <p className="text-base md:text-lg text-slate-200 font-semibold mb-8 text-center">
            {story.problemsLead}
          </p>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <ul className="grid sm:grid-cols-2 gap-4">
              {story.problems.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/5"
                >
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] md:text-base text-white font-extrabold leading-snug">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-[13.5px] md:text-sm text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="lg:w-[280px] xl:w-[320px] mx-auto">
              <img
                src={story.visualImage}
                alt={story.visualImageAlt}
                className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/20 text-[var(--color-brand-light)] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            {story.solutionBadge}
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--color-brand-light)] leading-tight max-w-4xl mx-auto">
            {story.solutionHeadline}
          </h3>
        </div>
      </div>
    </section>
  );
}
