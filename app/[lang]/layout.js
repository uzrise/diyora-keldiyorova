import Link from "next/link";
import "../globals.css";
import { Sora } from 'next/font/google'
const sora = Sora({ subsets: ['latin'] })

export default function Layout({ children, params }) {
  return (
    <html lang={params.locale} className={sora.className}>
      <body>{children}</body>
    </html>
  );
}
