"use client";

import { copy } from "@/lib/copy";
import { ChevronDown, ThumbsUp, MessageCircle, Share2, Star } from "lucide-react";

const AVATAR_COLORS = [
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-orange-500",
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const { testimonials } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#f0f2f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {testimonials.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            {testimonials.subheadline}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.items.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] border border-slate-200 overflow-hidden"
            >
              <div className="p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {initials(t.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] md:text-[15px] leading-tight">
                      <span className="font-bold text-[#1877f2]">{t.name}</span>{" "}
                      <span className="text-slate-500 text-[13px] md:text-[14px]">opinó sobre</span>
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-[12.5px] md:text-[13px] font-semibold text-[#1877f2] leading-snug">
                        {testimonials.productLabel}
                      </span>
                      <span className="inline-flex items-center gap-0.5 bg-[#1877f2] text-white text-[10.5px] md:text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                        5
                        <Star className="w-2.5 h-2.5 fill-white" strokeWidth={0} />
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[14px] md:text-[15px] text-[#050505] leading-relaxed">
                  {t.text}
                </p>
              </div>

              <div className="border-t border-slate-200 grid grid-cols-3 text-slate-500 text-[12.5px] md:text-[13px] font-semibold">
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  {testimonials.actions.like}
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 hover:bg-slate-50 transition-colors border-l border-r border-slate-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  {testimonials.actions.comment}
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 hover:bg-slate-50 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  {testimonials.actions.share}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(22,163,74,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            {testimonials.cta}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
