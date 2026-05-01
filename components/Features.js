import { copy } from "@/lib/copy";
import { Utensils, BookOpen, Lightbulb, Replace, Gift, Check } from "lucide-react";

const ICONS = { Utensils, BookOpen, Lightbulb, Replace, Gift };

export default function Features() {
  const { features } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {features.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">{features.subheadline}</p>
        </div>

        <ol className="mt-14 relative border-l-2 border-[var(--color-brand-light)] ml-4 md:ml-8 space-y-8">
          {features.items.map((item, i) => {
            const Icon = ICONS[item.icon] || Check;
            return (
              <li key={i} className="ml-6 md:ml-8 relative">
                <span className="absolute -left-[calc(1.5rem+10px)] md:-left-[calc(2rem+12px)] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-brand)] text-white shadow-md ring-4 ring-white">
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                  <h3 className="text-lg md:text-xl font-extrabold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
