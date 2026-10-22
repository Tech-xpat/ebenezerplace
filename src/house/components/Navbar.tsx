import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@/house/router";

interface NavbarProps {
  onOpenLiveModal?: () => void;
}

export default function Navbar({ onOpenLiveModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  const smoothScrollTo = (sectionId: string) => {
    setIsOpen(false);
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ pathname: "/", hash: `#${sectionId}` });
    }
  };

  const navLinks = [
    { path: "/", label: "Home", id: "home" },
    { path: "/about", label: "About", id: "about" },
    { path: "/general-overseer", label: "Overseer", id: null },
    { path: "/ministries", label: "Ministries", id: "ministries" },
    { path: "/sermons", label: "Sermons", id: null },
    { path: "/audios", label: "Audio", id: null },
    { path: "/books", label: "Books", id: null },
    { path: "/gallery", label: "Gallery", id: null },
    { path: "/contact", label: "Contact", id: "contact" },
  ] as const;

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/55 backdrop-blur-xl border-b border-white/25 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/25 backdrop-blur-lg border-b border-white/15"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <img
                src="/logo.webp"
                alt="Ebenezer's Place logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold tracking-tight text-zinc-900">
                Ebenezer's Place
              </div>
              <div className="text-[10px] text-zinc-600 -mt-0.5 hidden xl:block tracking-wide">
                Ebenezer's Place International Ministry
              </div>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-2 xl:gap-4 text-[12px] xl:text-sm font-medium">
            {navLinks.map(({ path, label, id }) => {
              return path === "/" && isHome && id ? (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(id);
                  }}
                  className="nav-link text-zinc-800 hover:text-violet-600 transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={path}
                  className={`nav-link transition-colors whitespace-nowrap ${
                    pathname === path ? "text-violet-600 font-semibold" : "text-zinc-800 hover:text-violet-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2">
            <Link
              to="/live"
              onClick={() => onOpenLiveModal?.()}
              className="px-3 xl:px-5 py-1.5 text-[12px] xl:text-sm font-semibold bg-white/35 backdrop-blur-md border border-white/40 hover:bg-white/55 rounded-full transition-all text-zinc-800 whitespace-nowrap"
            >
              Watch Live
            </Link>
            <Link
              to="/give"
              className="bg-violet-600 hover:bg-violet-700 text-white px-3 xl:px-5 py-1.5 text-[12px] xl:text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 shadow-md whitespace-nowrap"
            >
              <i className="fa-solid fa-heart text-xs" />
              Give
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="xl:hidden w-9 h-9 flex items-center justify-center text-xl text-zinc-800"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-y-auto overscroll-contain transition-all duration-300 ease-out ${
          isOpen ? "max-h-[calc(100dvh-3.5rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-white/25 py-5 px-5">
          <div className="flex flex-col gap-5 text-base">
            {navLinks.map(({ path, label }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`font-medium ${pathname === path ? "text-violet-600" : "text-zinc-900"}`}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 border-t border-zinc-200/50 flex flex-col gap-2.5">
              <Link
                to="/live"
                onClick={() => {
                  setIsOpen(false);
                  onOpenLiveModal?.();
                }}
                className="w-full py-3 bg-white/50 border border-white/50 rounded-2xl font-semibold text-zinc-800 text-sm text-center"
              >
                Watch Live
              </Link>
              <Link
                to="/give"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-violet-600 text-white rounded-2xl font-semibold text-sm text-center"
              >
                Give
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
