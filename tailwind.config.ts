import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#e1e7ff",
        // "primary-color": "#3c57c2",
        "border-color": "#917CD8",
        "secondary-color": "#623fdf",

        "primary-color": {
          100: "#e0d9f9",
          200: "#c0b2f2",
          300: "#a18cec",
          400: "#8165e5",
          500: "#623fdf",
          600: "#4e32b2",
          700: "#3b2686",
          800: "#271959",
          900: "#140d2d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
