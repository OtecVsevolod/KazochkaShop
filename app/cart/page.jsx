"use client";
import React from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {
  const {
    products,
    router,
    cartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
  } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20 bg-dark text-foreground">
        <div className="flex-1">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
            <p className="text-2xl md:text-3xl text-zinc-100">
              Twój{" "}
              <span className="font-semibold text-neonOrange">Koszyk</span>
            </p>
            <p className="text-lg md:text-xl text-zinc-400">
              {getCartCount()} produktów
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-gradient-to-b from-dark3 to-dark p-4">
            <table className="min-w-full table-auto">
              <thead className="text-left text-sm text-zinc-400">
                <tr>
                  <th className="text-nowrap pb-4 md:px-4 px-1 font-medium">
                    Produkt
                  </th>
                  <th className="pb-4 md:px-4 px-1 font-medium">
                    Cena
                  </th>
                  <th className="pb-4 md:px-4 px-1 font-medium">
                    Ilość
                  </th>
                  <th className="pb-4 md:px-4 px-1 font-medium">
                    Suma
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((itemId) => {
                  const product = products.find(
                    (product) => product._id === itemId
                  );

                  if (!product || cartItems[itemId] <= 0) return null;

                  return (
                    <tr key={itemId} className="border-t border-white/5">
                      {/* PRODUCT INFO */}
                      <td className="flex items-center gap-4 py-4 md:px-4 px-1">
                        <div>
                          <div className="rounded-xl overflow-hidden bg-black/40 p-2">
                            <Image
                              src={product.image[0]}
                              alt={product.name}
                              className="w-16 h-auto object-cover"
                              width={1280}
                              height={720}
                            />
                          </div>
                          <button
                            className="md:hidden text-xs text-neonOrange mt-1 hover:text-neonBlue transition"
                            onClick={() =>
                              updateCartQuantity(product._id, 0)
                            }
                          >
                            Usuń
                          </button>
                        </div>
                        <div className="text-sm hidden md:block">
                          <p className="text-zinc-100">{product.name}</p>
                          <button
                            className="text-xs text-neonOrange mt-1 hover:text-neonBlue transition"
                            onClick={() =>
                              updateCartQuantity(product._id, 0)
                            }
                          >
                            Usuń
                          </button>
                        </div>
                      </td>

                      {/* PRICE */}
                      <td className="py-4 md:px-4 px-1 text-zinc-300">
                        {product.offerPrice} PLN
                      </td>

                      {/* QUANTITY */}
                      <td className="py-4 md:px-4 px-1">
                        <div className="flex items-center md:gap-2 gap-1">
                          <button
                            onClick={() =>
                              updateCartQuantity(
                                product._id,
                                cartItems[itemId] - 1
                              )
                            }
                          >
                            <Image
                              src={assets.decrease_arrow}
                              alt="decrease_arrow"
                              className="w-4 h-4"
                            />
                          </button>
                          <input
                            onChange={(e) =>
                              updateCartQuantity(
                                product._id,
                                Number(e.target.value)
                              )
                            }
                            type="number"
                            value={cartItems[itemId]}
                            className="w-10 rounded-md border border-white/15 bg-dark3 text-center text-sm text-foreground outline-none focus:border-neonBlue"
                          />
                          <button onClick={() => addToCart(product._id)}>
                            <Image
                              src={assets.increase_arrow}
                              alt="increase_arrow"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      </td>

                      {/* SUBTOTAL */}
                      <td className="py-4 md:px-4 px-1 text-zinc-300">
                        {(product.offerPrice * cartItems[itemId]).toFixed(2)} PLN
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Если корзина пустая */}
            {getCartCount() === 0 && (
              <p className="mt-4 text-sm text-zinc-400">
                Twój koszyk jest pusty.
              </p>
            )}
          </div>

          {/* CONTINUE SHOPPING */}
          <button
            onClick={() => router.push("/all-products")}
            className="group flex items-center mt-6 gap-2 text-neonOrange hover:text-neonBlue transition"
          >
            <Image
              className="group-hover:-translate-x-1 transition"
              src={assets.arrow_right_icon_colored}
              alt="arrow_right_icon_colored"
            />
            Kontynuuj zakupy
          </button>
        </div>

        {/* ORDER SUMMARY (справа) */}
        <OrderSummary />
      </div>
    </>
  );
};

export default Cart;
