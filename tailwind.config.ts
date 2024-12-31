import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  Theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#25AAE1',
          foreground: '#ffffff',
        },
        logoBlue: "#25aae1"
      },
    },
  },
  plugins: [],
};
export default config;