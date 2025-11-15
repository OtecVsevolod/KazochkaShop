import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">

        {/* LOGO + DESCRIPTION */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="Kazochka Shop Logo" />
          <p className="mt-6 text-sm">
            Kazochka Shop — Twój internetowy marketplace z elektroniką, akcesoriami 
            i produktami codziennego użytku. Prosto, szybko i wygodnie.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Informacje</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="/">Strona główna</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">O nas</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Kontakt</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Polityka prywatności</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Regulamin</a>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Kontakt</h2>
            <div className="text-sm space-y-2">
              <p>+48 000 000 000</p>
              <p>kontakt@kazochka.shop</p>
            </div>
          </div>
        </div>

      </div>

      <p className="py-4 text-center text-xs md:text-sm">
        Copyright © 2025 Kazochka Shop. Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  );
};

export default Footer;
