import { MapPin, Clock, Navigation, Phone } from 'lucide-react';
import { SITE } from '@/lib/ministry';

const LAT = SITE.address.lat;
const LNG = SITE.address.lng;
const DIRECTIONS_URL = SITE.address.directions;
const EMBED_SRC = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

export default function MapSection() {
  return (
    <section id="location" className="py-10 sm:py-14 md:py-16 bg-zinc-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-white/10 text-amber-300 px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-medium mb-2 sm:mb-3">
            <MapPin size={12} />
            FIND US
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Visit Us in Ughelli
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
            We would love to worship with you in person. Here is how to find us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-video lg:aspect-auto lg:min-h-[340px]">
            <iframe
              title="Ebenezer's Place location map"
              src={EMBED_SRC}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex gap-3 sm:gap-4 items-start rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-300/15 text-amber-300 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="text-sm sm:text-base leading-snug">
                <p className="font-medium text-white">
                  {SITE.address.line1}
                </p>
                <p className="text-zinc-400 mt-0.5">
                  {SITE.address.line2}
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-300/15 text-amber-300 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={18} />
              </div>
              <div className="text-sm sm:text-base leading-snug">
                <p className="font-medium text-white">Encounter Service</p>
                <p className="text-zinc-400 mt-0.5">Thursdays, 6:00 PM WAT</p>
                <p className="text-zinc-400">Restoration of Glory</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-300/15 text-amber-300 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-sm sm:text-base leading-snug">
                <p className="font-medium text-white">+234 703 165 2763</p>
                <p className="text-zinc-500 text-xs">General Overseer</p>
                <p className="text-zinc-400 mt-1.5">+234 903 968 2190</p>
                <p className="text-zinc-500 text-xs">Support</p>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 bg-amber-300 hover:bg-amber-200 transition-colors text-zinc-900 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl"
            >
              <Navigation size={16} />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}