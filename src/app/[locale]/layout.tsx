import type { Metadata } from "next";
import { EB_Garamond, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import PaletteProvider from "@/components/PaletteProvider";
import { routing } from "@/i18n/routing";
import { getChurchJsonLd, getHomeContentMap } from "@/lib/publicSite";

export const dynamic = "force-dynamic";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

function ogLocaleFor(lang: string): string {
  if (lang === "pt") return "pt_BR";
  if (lang === "es") return "es_ES";
  return "en_US";
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const homeContent = await getHomeContentMap();

  const churchName =
    homeContent.parishName ||
    homeContent.churchName ||
    "St. Henry Catholic Church";
  const churchDescription =
    homeContent.churchDescription ||
    `${churchName} - Mass times, schedule, and worship. Join our welcoming Catholic parish community in Brigham City, Utah for Sunday Mass, daily Mass, Confession, and Adoration.`;
  const churchUrl = homeContent.websiteUrl || "https://sthenryutah.org";

  const seoKeywords = homeContent.seoKeywords || "";
  const keywords = seoKeywords
    ? seoKeywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : [
        churchName,
        "Catholic Church Brigham City Utah",
        "Mass times",
        "Catholic faith community",
        "Roman Catholic",
        "church services",
        "confession",
        "religious education",
      ];

  const ogImage = homeContent.seoOgImage || "/og-image.jpg";
  const twitterHandle = homeContent.seoTwitterHandle || "@sthenryutah";
  const googleVerification = homeContent.seoGoogleVerification || "";

  const origin = new URL(churchUrl).origin;
  const enHome = `${origin}/`;
  const ptHome = `${origin}/pt`;
  const esHome = `${origin}/es`;

  return {
    metadataBase: new URL(churchUrl),
    title: {
      default: `${churchName} | Brigham City, Utah`,
      template: `%s | ${churchName}`,
    },
    icons: {
      icon: "/fav.ico",
      shortcut: "/fav.ico",
      apple: "/fav.ico",
    },
    description: churchDescription,
    keywords,
    authors: [{ name: churchName }],
    creator: churchName,
    publisher: churchName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: googleVerification ? { google: googleVerification } : undefined,
    openGraph: {
      type: "website",
      locale: ogLocaleFor(locale),
      url: churchUrl,
      siteName: churchName,
      title: `${churchName} | Brigham City, Utah`,
      description: churchDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${churchName} Brigham City Utah`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${churchName} | Brigham City, Utah`,
      description: churchDescription,
      images: [ogImage],
      creator: twitterHandle,
    },
    alternates: {
      canonical: churchUrl,
      languages: {
        "x-default": enHome,
        en: enHome,
        pt: ptHome,
        es: esHome,
      },
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const churchData = await getChurchJsonLd();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    ...churchData,
    priceRange: "Free",
    image: "/og-image.jpg",
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${ebGaramond.variable} ${ibmPlex.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <PaletteProvider>{children}</PaletteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
