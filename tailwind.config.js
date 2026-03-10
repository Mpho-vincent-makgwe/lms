/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    'bg-pink-50', 'bg-blue-50', 'bg-orange-50', 'bg-green-50',
    'dark:bg-pink-900/20', 'dark:bg-blue-900/20', 'dark:bg-orange-900/20', 'dark:bg-green-900/20',
    'text-pink-600', 'text-blue-600', 'text-orange-600', 'text-green-600',
    'dark:text-pink-400', 'dark:text-blue-400', 'dark:text-orange-400', 'dark:text-green-400',
    'bg-pink-500/10', 'bg-blue-500/10', 'bg-orange-500/10', 'bg-green-500/10',
    'text-pink-500', 'text-blue-500', 'text-orange-500', 'text-green-500',
    'border-pink-500/20', 'border-blue-500/20', 'border-orange-500/20', 'border-green-500/20',
  ],
  plugins: [],
};
