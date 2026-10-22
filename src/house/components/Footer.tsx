import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "@/house/router";
import { LIVE_LINKS, GIVING } from "@/house/lib/site";
import { CopyableAccountNumber } from "./CopyableAccount";
import { TikTokIcon } from "./TikTokIcon";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-3 text-white mb-6">
              <img
                src="/logo.webp"
                alt="Ebenezer's Place logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="font-serif text-2xl font-bold text-white">Ebenezer's Place</div>
            </div>
            <p className="text-sm leading-relaxed">
              A Spirit-filled family dedicated to joyful worship, discipleship, and lasting transformation.
            </p>
          </div>

          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-white">Quick Links</div>
            <div className="space-y-3 text-sm">
              <div><Link to="/" className="hover:text-white transition-colors">Home</Link></div>
              <div><Link to="/about" className="hover:text-white transition-colors">About Us</Link></div>
              <div><Link to="/general-overseer" className="hover:text-white transition-colors">General Overseer</Link></div>
              <div><Link to="/ministries" className="hover:text-white transition-colors">Ministries</Link></div>
              <div><Link to="/sermons" className="hover:text-white transition-colors">Sermons</Link></div>
              <div><Link to="/audios" className="hover:text-white transition-colors">Audio</Link></div>
              <div><Link to="/books" className="hover:text-white transition-colors">Books</Link></div>
              <div><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></div>
              <div><Link to="/live" className="hover:text-white transition-colors">Watch Live</Link></div>
              <div><Link to="/give" className="hover:text-white transition-colors">Give</Link></div>
              <div><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></div>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-white">Bank Details</div>
            <div className="text-sm bg-white/5 p-6 rounded-3xl">
              <div className="text-[11px] uppercase tracking-widest text-amber-300 mb-2">{GIVING.bank}</div>
              <CopyableAccountNumber
                className="block w-full text-left cursor-pointer"
                numberClassName="text-lg text-white"
              />
              <div className="mt-2"><span className="text-amber-300">Name:</span> {GIVING.accountName}</div>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-widest mb-6 text-white">Connect</div>
            <div className="flex gap-4">
              {LIVE_LINKS.facebook ? (
                <a href={LIVE_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Facebook">
                  <Facebook size={20} className="text-white" />
                </a>
              ) : null}
              {LIVE_LINKS.instagram ? (
                <a href={LIVE_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
                  <Instagram size={20} className="text-white" />
                </a>
              ) : null}
              {LIVE_LINKS.youtube ? (
                <a href={LIVE_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="YouTube">
                  <Youtube size={20} className="text-white" />
                </a>
              ) : null}
              {LIVE_LINKS.tiktok ? (
                <a href={LIVE_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="TikTok">
                  <TikTokIcon size={20} className="text-white" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-20 pt-8 border-t border-white/10">
          © 2026 Ebenezer's Place International Ministry. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
