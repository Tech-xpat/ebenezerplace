import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Check, Copy, Menu, MessageCircle, X } from "lucide-react";
import { NAV, SITE, whatsappHref } from "@/lib/ministry";

export function Mark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="6" y="30" width="36" height="8" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="10" y="22" width="28" height="8" rx="1.5" fill="currentColor" />
      <rect x="16" y="12" width="16" height="10" rx="1.5" fill="currentColor" />
      <path d="M24 8v6M21 11h6" stroke="var(--color-foam)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LogoLockup({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 min-w-0">
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-xl ${
          light ? "bg-on-media/15 text-on-media" : "bg-deep text-foam"
        }`}
      >
        <Mark className="size-7" />
      </span>
      <span className="leading-tight min-w-0">
        <span className={`block font-serif text-lg font-semibold tracking-tight truncate ${light ? "text-on-media" : "text-ink"}`}>
          Ebenezer’s Place
        </span>
        <span className={`block text-[11px] tracking-wide truncate ${light ? "text-on-media/80" : "text-muted"}`}>
          International Ministry
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero = path === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        onHero ? "bg-transparent" : "bg-paper/90 backdrop-blur-md border-b border-line"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <LogoLockup light={onHero} />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                path === item.to
                  ? onHero
                    ? "text-foam"
                    : "text-deep"
                  : onHero
                    ? "text-on-media/90 hover:text-foam"
                    : "text-ink/80 hover:text-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/live"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              onHero ? "text-on-media ring-1 ring-on-media/40" : "text-deep ring-1 ring-line"
            }`}
          >
            Watch live
          </Link>
          <Link
            to="/give"
            className="rounded-full bg-deep px-4 py-2 text-sm font-semibold text-on-deep"
          >
            Give
          </Link>
        </div>
        <button
          type="button"
          className={`grid size-11 place-items-center rounded-xl lg:hidden ${onHero ? "text-on-media" : "text-ink"}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-xl px-3 py-3 text-base font-medium ${
                  path === item.to ? "bg-mist text-deep" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link to="/live" className="rounded-full py-3 text-center text-sm font-semibold ring-1 ring-line">
                Watch live
              </Link>
              <Link to="/give" className="rounded-full bg-deep py-3 text-center text-sm font-semibold text-on-deep">
                Give
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-deep text-on-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-foam">
            <Mark className="size-8" />
            <span className="font-serif text-xl">EPIM</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-on-deep/80">
            {SITE.name}. A house of worship, help, and witness in Ughelli — and beyond.
          </p>
          <p className="mt-4 font-serif italic text-foam">{SITE.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foam">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-on-deep/85">
            <li>{SITE.address.line1}</li>
            <li>{SITE.address.line2}</li>
            {SITE.services.map((s) => (
              <li key={s.name}>{s.when}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foam">House</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About the ministry"],
              ["/overseer", "General Overseer"],
              ["/ministries", "Ministries"],
              ["/sermons", "Sermons"],
              ["/audios", "Audio"],
              ["/books", "Readings"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-on-deep/85 hover:text-foam">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foam">Partner</p>
          <div className="mt-4 rounded-2xl bg-ink/30 p-4 text-sm">
            <p className="text-xs uppercase tracking-wider text-foam">{SITE.giving.bank}</p>
            <CopyNumber className="mt-2 text-lg font-semibold" />
            <p className="mt-2 text-on-deep/80">{SITE.giving.accountName}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-on-deep/10 px-4 py-5 text-center text-xs text-on-deep/70">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function CopyNumber({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 ${className}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(SITE.giving.accountNumber);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          setCopied(false);
        }
      }}
    >
      <span>{SITE.giving.accountNumber}</span>
      {copied ? <Check className="size-4 text-foam" /> : <Copy className="size-4 opacity-70" />}
      <span className="sr-only">{copied ? "Copied" : "Copy account number"}</span>
    </button>
  );
}

const PROMPTS = [
  {
    q: "Service times",
    a: "Sunday Celebration is 9:00 AM – 12:00 PM WAT. Thursday Teaching is the same hours. You are welcome in the hall or on the live page.",
  },
  {
    q: "How do I find you?",
    a: "We gather at No. 72 Market Road, opposite Voke Filling Station, along Zenith Bank, Ughelli, Delta State.",
  },
  {
    q: "Giving",
    a: `Flutterwave account ${SITE.giving.accountNumber}, name ${SITE.giving.accountName}. You can copy the number on the Give page.`,
  },
  {
    q: "I need prayer",
    a: "Tell us what to agree with you about. The usher desk will receive it, and the prayer team stands with the house.",
  },
];

export function Assist() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<string | null>(
    "Peace to you. Ask about service, location, giving, or prayer — or message the usher desk directly.",
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(100vw-2rem,22rem)] rounded-2xl border border-line bg-paper p-4 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-serif text-lg text-ink">EPIM desk</p>
              <p className="text-xs text-muted">Ebenezer’s Place · Ughelli</p>
            </div>
            <button type="button" aria-label="Close help" onClick={() => setOpen(false)} className="text-muted">
              <X className="size-5" />
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink">{note}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PROMPTS.map((item) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setNote(item.a)}
                className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-deep"
              >
                {item.q}
              </button>
            ))}
          </div>
          <a
            href={whatsappHref("Peace. I am reaching Ebenezer's Place International Ministry from the website.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-deep py-3 text-sm font-semibold text-on-deep"
          >
            <MessageCircle className="size-4" />
            Message the usher desk
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-deep px-4 py-3 text-sm font-semibold text-on-deep shadow-lg"
      >
        <MessageCircle className="size-4" />
        Talk to us
      </button>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-mist/60">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deep">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
      </div>
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <Assist />
    </div>
  );
}
