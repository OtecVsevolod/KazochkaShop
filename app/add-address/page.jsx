"use client";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const AddAddress = () => {
  const { router } = useAppContext();

  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // простая валидация
    if (
      !address.fullName ||
      !address.phoneNumber ||
      !address.pincode ||
      !address.area ||
      !address.city ||
      !address.state
    ) {
      alert("Uzupełnij wszystkie pola adresu.");
      return;
    }

    // сохраняем адрес локально в браузере
    if (typeof window !== "undefined") {
      localStorage.setItem("kazochka_address", JSON.stringify(address));
    }

    // возвращаемся в корзину
    router.push("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between bg-dark text-foreground">
        <form onSubmit={onSubmitHandler} className="w-full max-w-lg">
          <p className="text-2xl md:text-3xl text-zinc-100">
            Dodaj{" "}
            <span className="font-semibold text-neonOrange">
              adres dostawy
            </span>
          </p>

          <div className="space-y-3 mt-10">
            <input
              className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full"
              type="text"
              placeholder="Imię i nazwisko"
              onChange={(e) =>
                setAddress({ ...address, fullName: e.target.value })
              }
              value={address.fullName}
            />

            <input
              className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full"
              type="text"
              placeholder="Numer telefonu"
              onChange={(e) =>
                setAddress({ ...address, phoneNumber: e.target.value })
              }
              value={address.phoneNumber}
            />

            <input
              className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full"
              type="text"
              placeholder="Kod pocztowy"
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
              value={address.pincode}
            />

            <textarea
              className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full resize-none"
              rows={4}
              placeholder="Ulica, numer domu / mieszkania"
              onChange={(e) => setAddress({ ...address, area: e.target.value })}
              value={address.area}
            ></textarea>

            <div className="flex space-x-3">
              <input
                className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full"
                type="text"
                placeholder="Miasto"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                value={address.city}
              />
              <input
                className="px-3 py-2.5 rounded-xl border border-white/15 bg-dark3 text-sm text-foreground outline-none focus:border-neonBlue transition w-full"
                type="text"
                placeholder="Województwo"
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                value={address.state}
              />
            </div>
          </div>

          <button
            type="submit"
            className="max-w-sm w-full mt-6 rounded-full bg-neonOrange text-black py-3 text-sm font-semibold shadow-[0_0_18px_rgba(255,138,0,0.7)] hover:bg-[#ff9a24] uppercase tracking-wide transition"
          >
            Zapisz adres
          </button>
        </form>

        <Image
          className="md:mr-16 mt-16 md:mt-0 max-w-sm"
          src={assets.my_location_image}
          alt="Mapa lokalizacji"
        />
      </div>
      <Footer />
    </>
  );
};

export default AddAddress;
