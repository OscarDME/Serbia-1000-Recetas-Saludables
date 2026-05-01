"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { ChevronDown, BookOpen } from "lucide-react";

function getTimeLeft() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  const days = 0;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Hero() {
  const { hero, brand } = copy;
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#fefce8] pb-16">
      <div className="w-full bg-[var(--color-accent)] text-white text-center py-2.5 px-4 text-xs sm:text-sm md:text-base font-bold tracking-wide flex flex-wrap items-center justify-center gap-2 md:gap-5">
        <span className="uppercase">{hero.banner}</span>
        {mounted && (
          <span className="flex items-center gap-1.5 font-mono text-white">
            <span className="bg-white/20 rounded-md px-2 py-0.5 min-w-[40px]">
              {pad(time.hours)}
              <span className="text-[9px] ml-1 font-sans opacity-80">{hero.timerLabels.hours}</span>
            </span>
            <span className="bg-white/20 rounded-md px-2 py-0.5 min-w-[40px]">
              {pad(time.minutes)}
              <span className="text-[9px] ml-1 font-sans opacity-80">{hero.timerLabels.minutes}</span>
            </span>
            <span className="bg-white/20 rounded-md px-2 py-0.5 min-w-[40px]">
              {pad(time.seconds)}
              <span className="text-[9px] ml-1 font-sans opacity-80">{hero.timerLabels.seconds}</span>
            </span>
          </span>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-10">
        <div className="text-center text-sm md:text-base font-extrabold tracking-tight text-[var(--color-brand-dark)]">
          {brand.name && (
            <>{brand.name} <span className="text-slate-400">|</span>{" "}</>
          )}
          <span className="text-[var(--color-ink)]">{brand.tagline}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
            {hero.kicker}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight leading-[1.1] text-[var(--color-ink)]">
            {hero.headlinePre}{" "}
            <span className="text-[var(--color-brand)]">{hero.headlineHighlight}</span>{" "}
            {hero.headlinePost}
          </h1>

          <p className="mt-5 text-lg md:text-xl font-extrabold text-[var(--color-accent-dark)]">
            {hero.subheadline}
          </p>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            {hero.supporting}
          </p>

          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="group mt-8 inline-flex w-full md:w-auto items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-7 py-5 rounded-2xl shadow-[0_15px_40px_-12px_rgba(22,163,74,0.55)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" />
            {hero.cta}
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {hero.trustChips.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-700 shadow-sm"
              >
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[var(--color-brand-light)] blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-orange-100 blur-3xl opacity-70" />
          </div>
          <div className="relative animate-float-slow">
            <img
              src="/hero-mockup.webp"
              alt={hero.imageAlt}
              className="w-full max-w-[560px] mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
