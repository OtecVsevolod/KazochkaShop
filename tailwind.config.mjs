/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Главная неоновая палитра под твой лого
        neonOrange: "#FF8A00",
        neonBlue: "#00E5FF",

        // Базовые цвета интерфейса
        dark: "#05060A",
        dark2: "#0B0F16",
        dark3: "#101521",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        neonOrange: "0 0 20px rgba(255,138,0,0.7)",
        neonBlue: "0 0 20px rgba(0,229,255,0.6)",
      },

      borderRadius: {
        xl2: "14px",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
