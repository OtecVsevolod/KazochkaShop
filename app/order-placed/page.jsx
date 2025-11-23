"use client";

import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const OrderPlaced = () => {
  const { router } = useAppContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = localStorage.getItem("kazochka_last_order");
    if (data) {
      try {
        setOrder(JSON.parse(data));
      } catch (e) {
        console.error("Nie udało się odczytać zamówienia:", e);
      }
    }
  }, []);

  const paymentLabel =
    order?.paymentMethod === "transfer"
      ? "Przelew bankowy"
      : "Płatność przy odbiorze";

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-dark text-foreground flex flex-col items-center justify-center px-4">
        <div className="max-w-xl w-full rounded-2xl border border-white/10 bg-gradient-to-b from-dark3 to-dark p-8 text-center shadow-[0_0_26px_rgba(0,0,0,0.8)]">
          {/* Иконка */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-neonOrange/60 bg-black/40 relative">
            <div className="absolute inset-0 animate-ping rounded-full border border-neonOrange/40" />
            <Image
              src={assets.checkmark}
              alt="Zamówienie złożone"
              className="relative z-10 w-10 h-10"
            />
          </div>

          {/* Текст */}
          <h1 className="text-2xl md:text-3xl font-semibold text-zinc-50 mb-3">
            Zamówienie zostało złożone
          </h1>
          <p className="text-sm text-zinc-400 mb-6">
            Dziękujemy za zaufanie. Wkrótce skontaktujemy się z Tobą, aby
            potwierdzić szczegóły zamówienia i sposób dostawy.
          </p>

          {order && (
            <div className="mb-6 text-left text-xs md:text-sm space-y-3 rounded-xl bg-black/30 border border-white/10 p-4">
              <div>
                <p className="text-zinc-400 uppercase text-[10px] tracking-wide mb-1">
                  Adres dostawy
                </p>
                <p className="text-zinc-100">
                  {order.address.fullName}
                  <br />
                  {order.address.area}
                  <br />
                  {order.address.pincode} {order.address.city},{" "}
                  {order.address.state}
                </p>
              </div>

              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-zinc-400 uppercase text-[10px] tracking-wide mb-1">
                    Metoda płatności
                  </p>
                  <p className="text-zinc-100">{paymentLabel}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 uppercase text-[10px] tracking-wide mb-1">
                    Razem
                  </p>
                  <p className="text-neonOrange font-semibold">
                    {order.total} PLN
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push("/all-products")}
              className="flex-1 rounded-full bg-neonOrange px-4 py-2.5 text-sm font-semibold text-black shadow-[0_0_18px_rgba(255,138,0,0.7)] hover:bg-[#ff9a24] transition"
            >
              Kontynuuj zakupy
            </button>

            <Link
              href="/"
              className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-neonBlue hover:text-neonBlue transition text-center"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPlaced;
