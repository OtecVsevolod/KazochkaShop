import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Kazochka Shop — Twój Market Online",
  description:
    "Kazochka Shop to nowoczesny marketplace, w którym znajdziesz elektronikę, akcesoria i wiele innych produktów w najlepszych cenach.",
  icons: {
    icon: "/favicon.png?v=1",
    shortcut: "/favicon.png?v=1",
    apple: "/favicon.png?v=1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${outfit.className} bg-dark text-foreground antialiased`}
      >
        <Toaster
          toastOptions={{
            style: {
              background: "#0B0F16",
              color: "#F5F5F5",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />

        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
