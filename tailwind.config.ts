import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lucida: ['"Lucida Console"', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
