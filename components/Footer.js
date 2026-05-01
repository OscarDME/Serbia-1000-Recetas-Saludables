import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;
  return (
    <footer className="bg-[var(--color-ink)] text-slate-400 py-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-white text-lg md:text-xl font-extrabold tracking-wide">
          {footer.brand}
        </p>
        <p className="text-sm md:text-base text-slate-400">{footer.copyright}</p>
        <p className="text-xs md:text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed">
          {footer.disclaimer}
        </p>
        <p className="text-xs md:text-sm text-slate-500">{footer.trademark}</p>
      </div>
    </footer>
  );
}
