/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.writing-vertical-none':{
          "writing-mode":"inherit",
        },
        '.writing-horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
