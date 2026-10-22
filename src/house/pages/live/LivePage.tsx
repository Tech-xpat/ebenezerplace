import { Link } from '@/house/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { LIVE_LINKS } from '@/house/lib/site';

/** Live page: same hero webm at reduced opacity under glass morph card. */
export default function LivePage() {
  return (
    <div className="tail-container text-zinc-900 min-h-screen relative overflow-x-clip">
      {/* Fixed background video — soft, always visible behind glass */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/lv_0_20260809121737.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f3ee]/55 via-[#f4f3ee]/35 to-zinc-900/40" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenLiveModal={() => {}} />
        <main className="pt-20">
          <section className="py-12 sm:py-16 md:py-20 min-h-[75vh] flex items-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-5 w-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 bg-red-100/90 text-red-700 px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-medium mb-3 backdrop-blur-sm border border-red-200/50">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE STREAM
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12343c] leading-snug drop-shadow-sm">
                  Join Us Live
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#12343c]/85">
                  Thursday Encounter · 6:00 PM WAT
                </p>
              </div>

              {/* Glass morph card on top of video */}
              <div
                className="relative overflow-hidden rounded-3xl border border-white/40 shadow-2xl backdrop-blur-2xl p-7 sm:p-10"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 55%, rgba(246,228,207,0.35) 100%)',
                  boxShadow:
                    '0 12px 40px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.5) inset, 0 -1px 0 rgba(0,0,0,0.04) inset',
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/25 border border-red-400/30 text-red-600 flex items-center justify-center text-2xl mb-5 backdrop-blur-sm mx-auto">
                  <i className="fa-solid fa-tower-broadcast" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#12343c] text-center mb-2">
                  Thursday Encounter
                </h2>
                <p className="text-[#12343c]/80 text-sm sm:text-base mb-7 leading-relaxed text-center">
                  Restoration of Glory, from No. 72 Market Road, Ughelli. Streams appear here when the service is live.
                </p>

                <div className="space-y-3">
                  {LIVE_LINKS.facebook ? (
                    <a
                      href={LIVE_LINKS.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-[#1877F2]/12 border border-[#1877F2]/25 text-[#1877F2] font-semibold text-sm hover:bg-[#1877F2]/22 transition-all backdrop-blur-sm"
                    >
                      <span className="flex items-center gap-3">
                        <i className="fa-brands fa-facebook text-lg" />
                        Watch on Facebook
                      </span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-70" />
                    </a>
                  ) : null}

                  {LIVE_LINKS.youtube ? (
                    <a
                      href={LIVE_LINKS.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-red-500/12 border border-red-500/25 text-red-600 font-semibold text-sm hover:bg-red-500/22 transition-all backdrop-blur-sm"
                    >
                      <span className="flex items-center gap-3">
                        <i className="fa-brands fa-youtube text-lg" />
                        Watch on YouTube
                      </span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-70" />
                    </a>
                  ) : null}

                  {LIVE_LINKS.tiktok ? (
                    <a
                      href={LIVE_LINKS.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-zinc-950/10 border border-zinc-900/15 text-zinc-900 font-semibold text-sm hover:bg-zinc-950/15 transition-all backdrop-blur-sm"
                    >
                      <span className="flex items-center gap-3">
                        <i className="fa-brands fa-tiktok text-lg" />
                        Watch on TikTok
                      </span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-70" />
                    </a>
                  ) : null}
                </div>

                <div className="mt-8 pt-6 border-t border-white/30 text-center">
                  <p className="text-xs text-[#12343c]/65 mb-4">
                    Missed the live service? Catch the replay on any platform above.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-800"
                  >
                    <i className="fa-solid fa-arrow-left text-xs" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}
