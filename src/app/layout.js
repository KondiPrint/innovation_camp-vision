import { Roboto_Slab, Roboto } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav";

const slab = Roboto_Slab({ subsets: ["latin"], variable: "--font-slab" });
const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Røndes grønne initiativ",
  description: "En grøn oplevelse for alle i Rønde",
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${slab.variable} ${roboto.variable}`}>
      <body>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
