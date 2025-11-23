import { useAppContext } from "@/context/AppContext";
import React, { useState, useEffect } from "react";

const OrderSummary = () => {
  const { router, getCartCount, getCartAmount } = useAppContext();

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [savedAddress, setSavedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // "cod" — при получении, "transfer" — банковский перевод
  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = localStorage.getItem("kazochka_address");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setSavedAddress(parsed);
        setSelectedAddress(parsed);
      } catch (e) {
        console.error("Nie udało się odczytać adresu:", e);
      }
    }
  }, []);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {
    if (!selectedAddress) {
      alert("Wybierz lub dodaj adres dostawy.");
      return;
    }
    if (!paymentMethod) {
      alert("Wybierz metodę płatności.");
      return;
    }

    const subtotal = getCartAmount();
    const tax = Math.floor(subtotal * 0.02);
    const total = subtotal + tax;

    const orderData = {
      address: selectedAddress,
      paymentMethod,
      itemsCount: getCartCount(),
      subtotal,
      tax,
      total,
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("kazochka_last_order", JSON.stringify(orderData));
    }

    router.push("/order-placed");
  };

  const subtotal = getCartAmount();
  const tax = Math.floor(subtotal * 0.02);
  const total = subtotal + tax;

  return (
    <div className="w-full md:w-96 rounded-2xl border border-white/10 bg-gradient-to-b from-dark3 to-dark p-5 text-foreground shadow-[0_0_26px_rgba(0,0,0,0.8)]">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-50">
        Podsumowanie zamówienia
      </h2>

      <hr className="border-white/10 my-5" />

      <div className="space-y-6 text-sm">
        {/* ADRES DOSTAWY */}
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400 block mb-2 tracking-wide">
            Adres dostawy
          </label>
          <div className="relative inline-block w-full text-sm">
            <button
              className="peer w-full text-left px-4 pr-8 py-2.5 rounded-xl border border-white/15 bg-dark3 text-zinc-100 focus:outline-none focus:border-neonBlue transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="block truncate">
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Wybierz adres dostawy"}
              </span>
              <svg
                className={`w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9ca3af"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-dark3 border border-white/15 shadow-xl mt-1 z-20 rounded-xl py-1.5 max-h-60 overflow-y-auto">
                {savedAddress && (
                  <li
                    className="px-4 py-2 text-xs text-zinc-100 hover:bg-white/5 cursor-pointer"
                    onClick={() => handleAddressSelect(savedAddress)}
                  >
                    {savedAddress.fullName}, {savedAddress.area},{" "}
                    {savedAddress.city}, {savedAddress.state}
                  </li>
                )}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 text-xs text-neonOrange font-medium hover:bg-white/5 cursor-pointer text-center border-t border-white/10"
                >
                  + Dodaj nowy adres
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* METODA PŁATNOŚCI */}
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400 block mb-2 tracking-wide">
            Metoda płatności
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs text-zinc-200 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-neonOrange"
              />
              <span>
                Płatność przy odbiorze{" "}
                <span className="text-zinc-400">
                  (gotówka / karta u kuriera)
                </span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-xs text-zinc-200 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-neonOrange"
              />
              <span>
                Przelew bankowy{" "}
                <span className="text-zinc-400">
                  (dane do przelewu w potwierdzeniu)
                </span>
              </span>
            </label>
          </div>
        </div>

        {/* KOD RABATOWY */}
        <div>
          <label className="text-xs font-semibold uppercase text-zinc-400 block mb-2 tracking-wide">
            Kod rabatowy (opcjonalnie)
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Wpisz kod rabatowy"
              className="flex-grow w-full outline-none px-3 py-2.5 text-sm text-foreground border border-white/15 rounded-xl bg-dark3 focus:border-neonBlue transition"
            />
            <button className="rounded-full bg-neonOrange text-black px-9 py-2 text-xs font-semibold shadow-[0_0_16px_rgba(255,138,0,0.7)] hover:bg-[#ff9a24] transition">
              Zastosuj
            </button>
          </div>
        </div>

        <hr className="border-white/10 my-5" />

        {/* PODSUMOWANIE KWOT */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between font-medium">
            <p className="uppercase text-zinc-400 tracking-wide">
              Produkty {getCartCount()}
            </p>
          </div>

          <div className="flex justify-between text-zinc-300">
            <p>Suma produktów</p>
            <p className="font-medium text-zinc-100">{subtotal} PLN</p>
          </div>

          <div className="flex justify-between text-zinc-300">
            <p>Dostawa</p>
            <p className="font-medium text-green-400">Gratis</p>
          </div>

          <div className="flex justify-between text-zinc-300">
            <p>Podatek (2%)</p>
            <p className="font-medium text-zinc-100">{tax} PLN</p>
          </div>

          <div className="flex justify-between text-base md:text-lg font-semibold border-t border-white/10 pt-3">
            <p>Razem</p>
            <p className="text-neonOrange">{total} PLN</p>
          </div>
        </div>
      </div>

      <button
        onClick={createOrder}
        className="w-full rounded-full bg-neonOrange text-black py-3 mt-6 text-sm font-semibold shadow-[0_0_22px_rgba(255,138,0,0.8)] hover:bg-[#ff9a24] transition"
      >
        Złóż zamówienie
      </button>
    </div>
  );
};

export default OrderSummary;
