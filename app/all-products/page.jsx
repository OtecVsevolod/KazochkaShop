"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
  const { products } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Słownik kategorii -> ładne etykiety PL
  const categoryLabels = {
    all: "Wszystkie",
    Earphone: "Słuchawki douszne",
    Headphone: "Słuchawki nauszne",
    Smartphone: "Smartfony",
    Accessories: "Akcesoria",
    Camera: "Aparaty / kamery",
    Laptop: "Laptopy",
  };

  // Dostępne kategorie na podstawie produktów
  const availableCategories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [products]);

  // Filtrowanie po kategorii
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 pb-14 bg-dark text-foreground min-h-screen">
        {/* Nagłówek */}
        <div className="flex flex-col items-start pt-12 w-full">
          <p className="text-2xl md:text-3xl font-semibold text-zinc-50">
            Wszystkie produkty
          </p>
          <div className="w-28 h-0.5 bg-neonOrange rounded-full mt-2" />
          <p className="text-sm text-zinc-400 mt-2">
            Znaleziono {filteredProducts.length} produktów
          </p>
        </div>

        {/* Filtry kategorii */}
        <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              selectedCategory === "all"
                ? "bg-neonOrange text-black border-neonOrange shadow-[0_0_14px_rgba(255,138,0,0.7)]"
                : "bg-transparent text-zinc-300 border-white/15 hover:border-neonBlue hover:text-neonBlue"
            }`}
          >
            {categoryLabels.all}
          </button>

          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                selectedCategory === cat
                  ? "bg-neonOrange text-black border-neonOrange shadow-[0_0_14px_rgba(255,138,0,0.7)]"
                  : "bg-transparent text-zinc-300 border-white/15 hover:border-neonBlue hover:text-neonBlue"
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Siatka produktów */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-sm text-zinc-400 col-span-full">
              Brak produktów w tej kategorii.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
