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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fc2d45",

          secondary: "#325cdb",

          accent: "#9dc62b",

          neutral: "#251f28",

          "base-100": "#fbf9fb",

          info: "#2ab3e5",

          success: "#208373",

          warning: "#f2ae31",

          error: "#f73722",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
