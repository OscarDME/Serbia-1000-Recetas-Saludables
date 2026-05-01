import { copy } from "@/lib/copy";
import {
  Heart,
  Sparkles,
  Users,
  ChefHat,
  ListChecks,
  ShoppingBasket,
  Lightbulb,
  Apple,
  Wheat,
  Activity,
  HeartPulse,
  Check,
} from "lucide-react";

const ICONS = {
  Heart,
  Sparkles,
  Users,
  ChefHat,
  ListChecks,
  ShoppingBasket,
  Lightbulb,
  Apple,
  Wheat,
  Activity,
  HeartPulse,
};

export default function Benefits() {
  const { benefits } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-[var(--color-brand-light)]/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {benefits.forYouHeadline}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {benefits.forYouItems.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            return (
              <article
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-[var(--color-ink)] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 text-[15px] leading-relaxed">{item.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {benefits.headline}
          </h2>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.items.map((b, i) => {
            const Icon = ICONS[b.icon] || Check;
            return (
              <li
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[var(--color-brand)]/10 text-[var(--color-brand-dark)] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[var(--color-ink)] leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 max-w-3xl mx-auto bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white rounded-3xl p-7 md:p-10 text-center shadow-xl">
          <p className="text-base md:text-xl font-semibold leading-relaxed">
            {benefits.socialProof}
          </p>
        </div>
      </div>
    </section>
  );
}
