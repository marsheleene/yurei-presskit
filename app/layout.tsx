import type { Metadata } from "next";
import { Fredoka } from 'next/font/google';
import localFont from 'next/font/local';

import Keyart from '@/Images/yurei-keyart-logo-landscape.png';
import '@/Styles/globals.css';

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: "--font-fredoka",
})

const brushstrokeHorror = localFont({
  src: '../fonts/brushstroke-horror.otf',
  variable: "--font-brushstroke-horror",
})

const titlePage = "Yūrei Press Kit";
const descriptionPage = "Yūrei is a psychological horror game set in a manga’s haunted pages.";

export const metadata: Metadata = {
  title: titlePage,
  description: descriptionPage,
  metadataBase: new URL("https://marsheleene.github.io/"),
  openGraph: {
    title: titlePage,
    description: descriptionPage,
    images: [
      {
          url: Keyart.src,
          alt: "Yūrei key art"
      }
    ],
    url: "https://marsheleene.github.io/yurei-presskit/",
    siteName: titlePage,
    locale: "en_US",
    type: "website"
  },   
  twitter: {
    title: titlePage,
    description: descriptionPage,
    site: "https://marsheleene.github.io/yurei-presskit/",
    creator: "Team Yūrei",
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${brushstrokeHorror.variable} h-full antialiased`}
    >
      <head>
        <meta name="robots" content="nofollow" />
        <meta name="googlebot" content="nofollow" />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>

    </html>
  );
}
