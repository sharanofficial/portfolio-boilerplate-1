/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryContent: "rgb(var(--primary-content) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        secondaryContent: "rgb(var(--secondary-content) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentContent: "rgb(var(--accent-content) / <alpha-value>)",
        neutral: "rgb(var(--neutral) / <alpha-value>)",
        baseColor: "rgb(var(--baseColor) / <alpha-value>)",
        container: "rgb(var(--container) / <alpha-value>)",
        outlineColor: "rgb(var(--outline) / <alpha-value>)",
        disabled: "rgb(var(--disabled) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        bgError: "rgb(var(--error) / <alpha-value>)",
        bgSuccess: "rgb(var(--bgSuccess) / <alpha-value>)",
        transparent: "var(--transparent)",
      },
    },
  },
  plugins: [],
};
