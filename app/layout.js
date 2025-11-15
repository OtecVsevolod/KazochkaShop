import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "Kazochka Shop — Twój Market Online",
  description: "Kazochka Shop to nowoczesny marketplace, w którym znajdziesz elektronikę, akcesoria i wiele innych produktów w najlepszych cenach.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="pl">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
  );
}
