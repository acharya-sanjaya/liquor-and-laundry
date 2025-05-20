import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Facebook */}
        <meta property="og:title" content="Ashish Cold Stores and Laundry Service, Lakeside Pokhara" />
        <meta property="og:description" content="Affordable and professional laundry and cold storage solutions in Pokhara." />
        <meta property="og:image" content="https://liquor-and-laundry.vercel.app/logo.jpg" />
        <meta property="og:url" content="https://liquor-and-laundry.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ashish Cold Stores and Laundry Service Lakeside, Pokhara",
            "url": "https://liquor-and-laundry.vercel.app/",
            "logo": "https://liquor-and-laundry.vercel.app/logo.jpg",
            "image": "https://liquor-and-laundry.vercel.app/homepage-image.jpg",
            "description": "Cold storage and professional laundry services in Lakeside, Pokhara. Fast service, quality care for clothes and beverages.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lakeside",
              "addressLocality": "Pokhara",
              "addressRegion": "Gandaki Province",
              "addressCountry": "Nepal",
              "postalCode": "33700"
            },
            "telephone": "+9779805824016",
            "openingHours": "Mo-Su 07:00-21:00",
            "priceRange": "$",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.2096",
              "longitude": "83.9856"
            },
            "sameAs": [
              "https://www.facebook.com/aashish.subedi.143300",
              "https://wa.me/9779805824016"
            ]
          })
        }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
