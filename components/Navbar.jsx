"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="Kazochka Shop logo"
      />

      {/* Меню для десктопа */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Strona główna
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Produkty
        </Link>
        <Link href="/cart" className="hover:text-gray-900 transition">
          Koszyk
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Kontakt
        </Link>
      </div>

      {/* Иконки справа (поиск + корзина) */}
      <ul className="hidden md:flex items-center gap-4">
        <Image
          className="w-4 h-4 cursor-pointer"
          src={assets.search_icon}
          alt="Szukaj"
        />
        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-gray-900 transition"
        >
          <Image src={assets.cart_icon} alt="Koszyk" />
          <span>Koszyk</span>
        </Link>
      </ul>

      {/* Мобильное меню */}
      <div className="flex items-center md:hidden gap-3">
        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-gray-900 transition"
        >
          <Image src={assets.cart_icon} alt="Koszyk" />
          <span>Koszyk</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
