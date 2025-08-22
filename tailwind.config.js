import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
