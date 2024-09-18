import Link from "next/link";
import "../globals.css";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";
const sora = Sora({ subsets: ["latin"] });

export default function Layout({ children, params }) {
  return (
    <html lang={params.locale} className={sora.className}>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
