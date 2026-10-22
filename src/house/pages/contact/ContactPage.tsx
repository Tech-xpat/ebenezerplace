import { Link } from '@/house/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { LIVE_LINKS } from '@/house/lib/site';
import { SITE } from '@/lib/ministry';

export default function ContactPage() {
  return (
    <div className="tail-container bg-zinc-50 text-zinc-900 min-h-screen relative overflow-x-clip">
      <Navbar onOpenLiveModal={() => window.location.href = '/live'} />
      <main className="pt-20">
        <section className="py-10 sm:py-14 md:py-16 bg-[#f4f3ee] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-5">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-medium mb-3">
                <i className="fa-solid fa-envelope text-[10px]" />
                CONTACT
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12343c]">
                Get in Touch
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#12343c]/80 max-w-2xl mx-auto">
                We would love to hear from you. Reach out for prayer, partnership, or any inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#fffcf8] border border-[#c5ddd8] p-5 sm:p-7 rounded-xl sm:rounded-2xl space-y-5">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#12343c] mb-1">Location</h3>
                  <p className="text-sm text-[#12343c]/85">{SITE.address.full}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#12343c] mb-1">Service Times</h3>
                  <p className="text-sm text-[#12343c]/85">Thursday Encounter · 6:00 PM WAT</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#12343c] mb-1">Email / Phone</h3>
                  <p className="text-sm text-[#12343c]/85">office@ebenezersplace.org</p>
                  <p className="text-sm text-[#12343c]/85 mt-1">
                    <a href="tel:+2347031652763" className="hover:text-violet-700">+234 703 165 2763</a>
                    <span className="text-[#12343c]/55"> · General Overseer</span>
                  </p>
                  <p className="text-sm text-[#12343c]/85">
                    <a href="tel:+2349039682190" className="hover:text-violet-700">+234 903 968 2190</a>
                    <span className="text-[#12343c]/55"> · Support</span>
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/2349039682190"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                  >
                    <i className="fa-brands fa-whatsapp" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-[#fffcf8] border border-[#c5ddd8] p-5 sm:p-7 rounded-xl sm:rounded-2xl">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#12343c] mb-4">
                  Follow & Connect
                </h3>
                <div className="space-y-3">
                  {LIVE_LINKS.facebook ? (
                    <a
                      href={LIVE_LINKS.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm text-[#12343c]/90 hover:text-violet-700 transition-colors"
                    >
                      <i className="fa-brands fa-facebook text-[#1877F2] w-5" />
                      Facebook
                    </a>
                  ) : null}
                  {LIVE_LINKS.instagram ? (
                    <a
                      href={LIVE_LINKS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm text-[#12343c]/90 hover:text-violet-700 transition-colors"
                    >
                      <i className="fa-brands fa-instagram text-pink-600 w-5" />
                      Instagram
                    </a>
                  ) : null}
                  {LIVE_LINKS.youtube ? (
                    <a
                      href={LIVE_LINKS.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm text-[#12343c]/90 hover:text-violet-700 transition-colors"
                    >
                      <i className="fa-brands fa-youtube text-red-600 w-5" />
                      YouTube
                    </a>
                  ) : null}
                  {LIVE_LINKS.tiktok ? (
                    <a
                      href={LIVE_LINKS.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm text-[#12343c]/90 hover:text-violet-700 transition-colors"
                    >
                      <i className="fa-brands fa-tiktok w-5" />
                      TikTok
                    </a>
                  ) : null}
                </div>
                <div className="mt-6 pt-5 border-t border-[#c5ddd8]">
                  <Link
                    to="/give"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                  >
                    <i className="fa-solid fa-heart text-xs" />
                    Support the Ministry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
