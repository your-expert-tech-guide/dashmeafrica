/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/hero/hero-bg.png')",
        "hero-pattern-m": "url('./src/assets/images/hero/hero-bg-m.png')",
        "hero-pattern-md": "url('./src/assets/images/hero/hero-bg-md.png')",
        "hero-pattern-5": "url('./src/assets/images/hero/hero-bg-5.png')",
        "hero-pattern-9": "url('./src/assets/images/hero/hero-bg-9.png')",
      },
    },
  },
  plugins: [],
};
