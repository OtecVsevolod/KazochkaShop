"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 bg-dark/95 backdrop-blur border-b border-white/10 text-zinc-200">
      {/* Лого */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="Kazochka Shop logo"
      />

      {/* Меню для десктопа */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden text-sm">
        <Link
          href="/"
          className="relative hover:text-neonOrange transition"
        >
          Strona główna
        </Link>
        <Link
          href="/all-products"
          className="relative hover:text-neonOrange transition"
        >
          Produkty
        </Link>
        <Link
          href="/cart"
          className="relative hover:text-neonOrange transition"
        >
          Koszyk
        </Link>
        <Link
          href="/contact"
          className="relative hover:text-neonOrange transition"
        >
          Kontakt
        </Link>
      </div>

      {/* Иконки справа (поиск + корзина) */}
      <ul className="hidden md:flex items-center gap-4 text-sm">
        <li>
          <button className="p-2 rounded-full border border-white/10 bg-dark3 hover:border-neonBlue hover:text-neonBlue transition">
            <Image
              className="w-4 h-4"
              src={assets.search_icon}
              alt="Szukaj"
            />
          </button>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-dark3 px-3 py-1.5 hover:border-neonOrange hover:text-neonOrange transition"
          >
            <Image src={assets.cart_icon} alt="Koszyk" />
            <span>Koszyk</span>
          </Link>
        </li>
      </ul>

      {/* Мобильное меню */}
      <div className="flex items-center md:hidden gap-3 text-sm">
        <Link
          href="/cart"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-dark3 px-3 py-1.5 hover:border-neonOrange hover:text-neonOrange transition"
        >
          <Image src={assets.cart_icon} alt="Koszyk" />
          <span>Koszyk</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
