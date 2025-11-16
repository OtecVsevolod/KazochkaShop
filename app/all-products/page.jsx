"use client"
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
  const { products } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Сопоставление технических категорий с читаемыми названиями
  const categoryLabels = {
    all: "Wszystkie",
    Earphone: "Słuchawki douszne",
    Headphone: "Słuchawki nauszne",
    Smartphone: "Smartfony",
    Accessories: "Akcesoria",
    Camera: "Aparaty / kamery",
    Laptop: "Laptopy",
  };

  // Достаем реальные категории из товаров
  const availableCategories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [products]);

  // Фильтрация товаров по выбранной категории
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 pb-14">
        {/* Заголовок */}
        <div className="flex flex-col items-start pt-12 w-full">
          <p className="text-2xl md:text-3xl font-medium text-gray-800">
            Wszystkie produkty
          </p>
          <div className="w-24 h-0.5 bg-orange-600 rounded-full mt-2" />
          <p className="text-sm text-gray-500/80 mt-2">
            Znaleziono {filteredProducts.length} produktów
          </p>
        </div>

        {/* Фильтры по категориям */}
        <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              selectedCategory === "all"
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {categoryLabels.all}
          </button>

          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-8 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
