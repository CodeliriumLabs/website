import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      fontFamily: {
        emoji: 'var(--emoji-font)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
    },
  },
};
export default config;
