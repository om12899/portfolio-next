/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#addcca",
        "light-blue": "#addcca",
        "light-gray": "#f7f8f3",
        "light-green": "#aade87",
        "dark-gray": "#232323",
        "dark-green": "#52ada2",
      },
    },
  },
  plugins: [],
};
