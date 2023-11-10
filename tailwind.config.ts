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
        gray: "#212837",
        gray_lite: "#394051",
        yellow: "#faf48b",
      },
      padding: {
        default: "8px",
        sm: "4px",
      },
      borderRadius: {
        default: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
