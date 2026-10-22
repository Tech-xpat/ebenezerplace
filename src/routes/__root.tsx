import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE } from "@/lib/ministry";
import ScrollToTop from "@/house/components/ScrollToTop";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ebenezer's Place — Ebenezer's Place International Ministry" },
      { name: "description", content: SITE.description },
      { name: "keywords", content: SITE.keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#90e0ef" },
      { name: "application-name", content: SITE.short },
      { name: "geo.region", content: "NG-DE" },
      { name: "geo.placename", content: "Ughelli, Delta State, Nigeria" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preload", as: "image", href: "/images/hero-poster.webp" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          name: SITE.name,
          alternateName: ["Ebenezer's Place", "EPI"],
          description: SITE.description,
          telephone: SITE.leader.phoneTel,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.line1,
            addressLocality: "Ughelli",
            addressRegion: "Delta State",
            addressCountry: "NG",
          },
          founder: { "@type": "Person", name: SITE.leader.name, jobTitle: SITE.leader.role },
        }),
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ScrollToTop />
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
