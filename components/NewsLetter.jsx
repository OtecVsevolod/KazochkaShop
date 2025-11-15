import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium text-gray-900">
        Dołącz do newslettera Kazochka Shop
      </h1>

      <p className="md:text-base text-gray-500/80 pb-8 max-w-xl">
        Otrzymuj najlepsze promocje, nowości i oferty specjalne prosto na swój e-mail.
      </p>

      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Wpisz swój adres e-mail"
        />
        <button className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none hover:bg-orange-700 transition">
          Zapisz się
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
