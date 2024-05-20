import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import './lib/animate/animate.min.css'
import './assets/styles/bootstrap.min.css'
import './assets/styles/style.css'

const nunito = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Consejo Charata",
  description: "Sitio web del Concejo de la municipalidad de Charata, Chaco, Argentina",
  keywords: ['consejo'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
          {children}

          <Script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js" strategy="beforeInteractive" />
          <Script id="show-banner" strategy="beforeInteractive">
            { `new WOW().init();`}
          </Script>
          
      </body>
    </html>
  );
}
